# aws-sdk s3

## install

```sh
npm i @aws-sdk/client-s3
```

## usage

```ts
import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { MemoryStoredFile } from "nestjs-form-data";
import path from "path";
import { AwsS3DTO } from "./aws-s3.dto";

@Injectable()
export class AwsS3Service {
  logger = new Logger(AwsS3Service.name);
  s3: S3Client;

  constructor() {
    this.s3 = new S3Client({
      region: process.env["AWS_REGION"],
      credentials: {
        accessKeyId: process.env["AWS_ACCESS_KEY"],
        secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"],
      },
    });
  }

  async upload(file: MemoryStoredFile) {
    const ext = path.extname(file.originalName);
    const basename = path.basename(file.originalName, ext);
    const key = `original/${basename}_${Date.now()}${ext}`;

    const command = new PutObjectCommand({
      Bucket: process.env["AWS_S3_BUCKET_NAME"],
      Key: key,
      Body: file.buffer,
    });
    await this.s3.send(command).catch(error => {
      this.logger.error(error);
      throw new InternalServerErrorException("Failed to upload file");
    });
    return plainToInstance(AwsS3DTO, {
      key,
      url: process.env["AWS_CLOUDFRONT_DOMAIN"] + key,
    });
  }

  async delete(key: string) {
    const command = new DeleteObjectCommand({
      Bucket: process.env["AWS_S3_BUCKET_NAME"],
      Key: key,
    });
    return await this.s3.send(command);
  }
}
```
