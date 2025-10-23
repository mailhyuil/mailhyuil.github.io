# Lambda layer Image Resize on Demand

1. S3 버킷 생성

   - original bucket (original 이미지를 담을 버킷) (block all public access) (cors 설정 필요)

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "AllowLambdaAccessOnly",
         "Effect": "Allow",
         "Principal": {
           "AWS": "arn:aws:iam::xxxxxxxxxxxx:role/service-role/image-resize-role-xxxxxxxx"
         },
         "Action": ["s3:GetObject", "s3:PutObject"],
         "Resource": "arn:aws:s3:::hyuil-images-original/*"
       }
     ]
   }
   ```

   - transformed (image-resized) bucket (변환된 이미지를 담을 버킷) (public access all) (cors 설정 필요)

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "AllowAllExceptResourcesFolder",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:*",
         "Resource": ["arn:aws:s3:::hyuil-images-resized", "arn:aws:s3:::hyuil-images-resized/*"]
       }
     ]
   }
   ```

2. Lambda 생성
   > Funtion URL 생성 (Auth None)
   >
   > > memory 512MB, timeout 5s ~ 10s

```js
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import Sharp from "sharp";

const s3Client = new S3Client();
const S3_ORIGINAL_IMAGE_BUCKET = "image-original";
const S3_TRANSFORMED_IMAGE_BUCKET = "image-resized";
const TRANSFORMED_IMAGE_CACHE_TTL = "public, max-age=31536000, immutable";
const MAX_IMAGE_SIZE = 2_097_152; // 2MB

export const handler = async event => {
  // Validate if this is a GET request
  if (!event.requestContext || !event.requestContext.http || !(event.requestContext.http.method === "GET"))
    return sendError(400, "Only GET method is supported", event);
  // An example of expected path is /images/rio/1.jpeg/format=auto,width=100 or /images/rio/1.jpeg/original where /images/rio/1.jpeg is the path of the original image
  var imagePathArray = event.requestContext.http.path.split("/");
  // get the requested image operations
  var operationsPrefix = imagePathArray.pop();
  // get the original image path images/rio/1.jpg
  imagePathArray.shift();
  var originalImagePath = imagePathArray.join("/");

  var startTime = performance.now();
  // Downloading original image
  let originalImageBody;
  let contentType;
  try {
    const getOriginalImageCommand = new GetObjectCommand({ Bucket: S3_ORIGINAL_IMAGE_BUCKET, Key: originalImagePath });
    const getOriginalImageCommandOutput = await s3Client.send(getOriginalImageCommand);
    console.log(`Got response from S3 for ${originalImagePath}`);

    originalImageBody = getOriginalImageCommandOutput.Body.transformToByteArray();
    contentType = getOriginalImageCommandOutput.ContentType;
  } catch (error) {
    if (error.name === "NoSuchKey") {
      return sendError(404, "The requested image does not exist", error);
    }
    return sendError(500, "Error downloading original image", error);
  }
  let transformedImage = Sharp(await originalImageBody, { failOn: "none", animated: true });
  // Get image orientation to rotate if needed
  const imageMetadata = await transformedImage.metadata();
  // execute the requested operations
  const operationsJSON = Object.fromEntries(operationsPrefix.split(",").map(operation => operation.split("=")));
  // variable holding the server timing header value
  var timingLog = "img-download;dur=" + parseInt(performance.now() - startTime);
  startTime = performance.now();
  try {
    // check if resizing is requested
    var resizingOptions = {};
    if (operationsJSON["width"]) resizingOptions.width = parseInt(operationsJSON["width"]);
    if (operationsJSON["height"]) resizingOptions.height = parseInt(operationsJSON["height"]);
    if (resizingOptions) transformedImage = transformedImage.resize(resizingOptions);
    // check if rotation is needed
    if (imageMetadata.orientation) transformedImage = transformedImage.rotate();
    // check if formatting is requested
    if (operationsJSON["format"]) {
      var isLossy = false;
      switch (operationsJSON["format"]) {
        case "jpeg":
          contentType = "image/jpeg";
          isLossy = true;
          break;
        case "gif":
          contentType = "image/gif";
          break;
        case "webp":
          contentType = "image/webp";
          isLossy = true;
          break;
        case "png":
          contentType = "image/png";
          break;
        case "avif":
          contentType = "image/avif";
          isLossy = true;
          break;
        default:
          contentType = "image/jpeg";
          isLossy = true;
      }
      if (operationsJSON["quality"] && isLossy) {
        transformedImage = transformedImage.toFormat(operationsJSON["format"], {
          quality: parseInt(operationsJSON["quality"]),
        });
      } else transformedImage = transformedImage.toFormat(operationsJSON["format"]);
    } else {
      /// If not format is precised, Sharp converts svg to png by default https://github.com/aws-samples/image-optimization/issues/48
      if (contentType === "image/svg+xml") contentType = "image/png";
    }
    transformedImage = await transformedImage.toBuffer();
  } catch (error) {
    return sendError(500, "error transforming image", error);
  }
  timingLog = timingLog + ",img-transform;dur=" + parseInt(performance.now() - startTime);

  // handle gracefully generated images bigger than a specified limit (e.g. Lambda output object limit)
  const imageTooBig = Buffer.byteLength(transformedImage) > MAX_IMAGE_SIZE;

  // upload transformed image back to S3 if required in the architecture
  if (S3_TRANSFORMED_IMAGE_BUCKET) {
    startTime = performance.now();
    try {
      const putImageCommand = new PutObjectCommand({
        Body: transformedImage,
        Bucket: S3_TRANSFORMED_IMAGE_BUCKET,
        Key: originalImagePath + "/" + operationsPrefix,
        ContentType: contentType,
        CacheControl: TRANSFORMED_IMAGE_CACHE_TTL,
      });
      await s3Client.send(putImageCommand);
      timingLog = timingLog + ",img-upload;dur=" + parseInt(performance.now() - startTime);
      // If the generated image file is too big, send a redirection to the generated image on S3, instead of serving it synchronously from Lambda.
      if (imageTooBig) {
        return {
          statusCode: 302,
          headers: {
            Location: "/" + originalImagePath + "?" + operationsPrefix.replace(/,/g, "&"),
            "Cache-Control": "private,no-store",
            "Server-Timing": timingLog,
          },
        };
      }
    } catch (error) {
      logError("Could not upload transformed image to S3", error);
    }
  }

  // Return error if the image is too big and a redirection to the generated image was not possible, else return transformed image
  if (imageTooBig) {
    return sendError(403, "Requested transformed image is too big", "");
  } else
    return {
      statusCode: 200,
      body: transformedImage.toString("base64"),
      isBase64Encoded: true,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": TRANSFORMED_IMAGE_CACHE_TTL,
        "Server-Timing": timingLog,
      },
    };
};

function sendError(statusCode, body, error) {
  logError(body, error);
  return { statusCode, body };
}

function logError(body, error) {
  console.log("APPLICATION ERROR", body);
  console.log(error);
}
```

3. Cloudfront Function 생성

```js
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

function handler(event) {
  var request = event.request;
  var originalImagePath = request.uri;
  //  validate, process and normalize the requested operations in query parameters
  var normalizedOperations = {};
  if (request.querystring) {
    Object.keys(request.querystring).forEach(operation => {
      switch (operation.toLowerCase()) {
        case "format":
          var SUPPORTED_FORMATS = ["auto", "jpeg", "webp", "avif", "png", "svg", "gif"];
          if (
            request.querystring[operation]["value"] &&
            SUPPORTED_FORMATS.includes(request.querystring[operation]["value"].toLowerCase())
          ) {
            var format = request.querystring[operation]["value"].toLowerCase(); // normalize to lowercase
            if (format === "auto") {
              format = "jpeg";
              if (request.headers["accept"]) {
                if (request.headers["accept"].value.includes("avif")) {
                  format = "avif";
                } else if (request.headers["accept"].value.includes("webp")) {
                  format = "webp";
                }
              }
            }
            normalizedOperations["format"] = format;
          }
          break;
        case "width":
          if (request.querystring[operation]["value"]) {
            var width = parseInt(request.querystring[operation]["value"]);
            if (!isNaN(width) && width > 0) {
              // you can protect the Lambda function by setting a max value, e.g. if (width > 4000) width = 4000;
              normalizedOperations["width"] = width.toString();
            }
          }
          break;
        case "height":
          if (request.querystring[operation]["value"]) {
            var height = parseInt(request.querystring[operation]["value"]);
            if (!isNaN(height) && height > 0) {
              // you can protect the Lambda function by setting a max value, e.g. if (height > 4000) height = 4000;
              normalizedOperations["height"] = height.toString();
            }
          }
          break;
        case "quality":
          if (request.querystring[operation]["value"]) {
            var quality = parseInt(request.querystring[operation]["value"]);
            if (!isNaN(quality) && quality > 0) {
              if (quality > 100) quality = 100;
              normalizedOperations["quality"] = quality.toString();
            }
          }
          break;
        default:
          break;
      }
    });
    //rewrite the path to normalized version if valid operations are found
    if (Object.keys(normalizedOperations).length > 0) {
      // put them in order
      var normalizedOperationsArray = [];
      if (normalizedOperations.format) normalizedOperationsArray.push("format=" + normalizedOperations.format);
      if (normalizedOperations.quality) normalizedOperationsArray.push("quality=" + normalizedOperations.quality);
      if (normalizedOperations.width) normalizedOperationsArray.push("width=" + normalizedOperations.width);
      if (normalizedOperations.height) normalizedOperationsArray.push("height=" + normalizedOperations.height);
      request.uri = originalImagePath + "/" + normalizedOperationsArray.join(",");
    } else {
      // If no valid operation is found, flag the request with /original path suffix
      request.uri = originalImagePath + "/original";
    }
  } else {
    // If no query strings are found, flag the request with /original path suffix
    request.uri = originalImagePath + "/original";
  }
  // remove query strings
  request["querystring"] = {};
  return request;
}
```

4. Cloudfront에 S3_Image_Resized_Bucket, Lambda_Function_URL Origin 추가 후 Origin Group으로 묶기

- image-resized-bucket: 1순위
- lambda-function-url: 2순위

5. /path에 Origin Group 추가
