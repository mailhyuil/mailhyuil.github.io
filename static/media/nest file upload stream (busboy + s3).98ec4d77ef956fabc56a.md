# nest file busboy s3 upload

```ts
import { Readable } from "stream";
export class S3Service {
  constructor(private readonly s3: S3) {}
  async uploadStreamToS3(stream: Readable, filename: string) {
    const params = {
      Bucket: "bucket-name",
      Key: s3Key,
      Body: stream, // stream으로 업로드
    };
    return this.s3.upload(params).promise();
  }
}
```
