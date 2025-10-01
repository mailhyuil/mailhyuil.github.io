# Lambda layer Image Resize

1. Lambda 생성
   > memory 512MB, timeout 5s
2. Trigger 생성 (S3) (S3에서 Event로 등록하는 방법도 있다, 둘 중 한가지 방법만 사용해야한다.)
3. layer 생성 (sharp.. 라이브러리를 zip으로 압축해서 업로드)
   > sharp는 os에 의존적이기 때문에 주의

```sh
npm install --cpu=x64 --os=linux sharp

mkdir nodejs
cp -r node_modules nodejs # nodejs/node_modules 구조
zip -r nodejs nodejs
```

4. source code 작성 후 deploy
   > commonjs로 작성
   >
   > > 이미지를 리사이징 하여 /resized/small, /resized/medium, /resized/large에 저장

```js
const AWS = require("aws-sdk");
const sharp = require("sharp");
const path = require("path");

const s3 = new AWS.S3();
const dstBucket = "dep-team-bucket";

// 크기별 설정
const sizes = {
  small: 320,
  medium: 640,
  large: 1280,
};

exports.handler = async event => {
  const srcBucket = event.Records[0].s3.bucket.name;
  const srcKey = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "));
  const extMatch = srcKey.match(/\.([^.]*)$/);
  if (!extMatch) return;

  const imageType = extMatch[1].toLowerCase();
  if (!["jpg", "jpeg", "png"].includes(imageType)) return;

  const filename = path.basename(srcKey, path.extname(srcKey));

  try {
    const originalImage = await s3.getObject({ Bucket: srcBucket, Key: srcKey }).promise();

    for (const [sizeName, width] of Object.entries(sizes)) {
      const buffer = await sharp(originalImage.Body).resize(width).webp().toBuffer();

      const dstKey = `resized/${sizeName}/${filename}.webp`;

      await s3
        .putObject({
          Bucket: dstBucket,
          Key: dstKey,
          Body: buffer,
          ContentType: "image/webp",
        })
        .promise();
    }

    console.log(`✅ All sizes created for ${srcKey}`);
  } catch (err) {
    console.error(`❌ Error processing ${srcKey}:`, err);
  }
};
```

5. Cloudfront Fucntion 사이즈 매핑
   > function을 view request에 연결

```js
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var qs = request.querystring;

  // 유효한 size 목록
  var validSizes = ["small", "medium", "large"];

  // size 파라미터 존재 & 유효한 값인지 확인
  if (qs.size && validSizes.includes(qs.size.value) && uri.startsWith("/images/")) {
    var size = qs.size.value;

    // 파일명 추출
    var filename = uri.replace("/images/", "").replace(/\.[^/.]+$/, "");

    // 경로 재작성: /resized/{size}/{filename}.webp
    request.uri = `/resized/${size}/${filename}.webp`;
  }

  return request;
}
```

6. Cache Policy 생성
   > querystring size를 포함한 policy 생성
