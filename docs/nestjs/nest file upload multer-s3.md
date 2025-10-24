# nest file upload multer-s3

> 그냥 @aws-sdk/client-s3를 사용하자

## install

```sh
npm i multer-s3
```

## multer-s3.factory.ts

```ts
import { S3Client } from "@aws-sdk/client-s3";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import multerS3 from "multer-s3";
import path from "path";

export const multerOptionsFactory = (): MulterOptions => {
  const s3 = new S3Client({
    region: process.env["AWS_REGION"],
    credentials: {
      accessKeyId: process.env["AWS_ACCESS_KEY_ID"],
      secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"],
    },
  });

  return {
    storage: multerS3({
      s3,
      acl: "public-read",
      contentType: multerS3.AUTO_CONTENT_TYPE,
      bucket: process.env["AWS_S3_BUCKET_NAME"],
      key(_req, file, done) {
        const ext = path.extname(file.originalname);
        const basename = path.basename(file.originalname, ext);
        done(null, `${basename}_${Date.now()}${ext}`);
      },
    }),
    // limits: { fileSize: 10 * 1024 * 1024 },
  };
};
```

## multer-s3.type.ts

```ts
export type MulterS3File = {
  size: number; // Size of the file in bytes
  bucket: string; // The bucket used to store the file (S3Storage)
  key: string; // The name of the file (S3Storage)
  acl: string; // Access control for the file (S3Storage)
  contentType: string; // The mimetype used to upload the file (S3Storage)
  metadata?: Record<string, any>; // The metadata object to be sent to S3 (S3Storage)
  location: string; // The S3 URL to access the file (S3Storage)
  etag: string; // The etag of the uploaded file in S3 (S3Storage)
  contentDisposition?: string | null; // The contentDisposition used to upload the file (S3Storage)
  storageClass: string; // The storageClass to be used for the uploaded file in S3 (S3Storage)
  versionId?: string; // The versionId is an optional param returned by S3 for versioned buckets. (S3Storage)
  contentEncoding?: string | null; // The contentEncoding used to upload the file (S3Storage)
};
```

## aws-s3.module.ts

```ts
import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { multerS3Factory } from "./multer-s3.factory";

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: multerS3Factory,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [MulterModule],
})
export class AwsS3Module {}
```

## file.controller.ts

```ts
@Controller("files")
export class FileController {
  @Post()
  @UseInterceptors(FileInterceptor("file"))
  upload(@UploadedFile() file: MulterS3File): Promise<string> {
    return this.fileService.upload(file);
  }
}
```
