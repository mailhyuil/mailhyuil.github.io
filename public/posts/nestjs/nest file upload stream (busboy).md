# nest file busboy

> 파일을 in-memory에 저장하지 않고 바로 스트림으로 읽어서 처리할거라면 busboy를 사용하는 것이 좋다.
>
> > 파일을 업로드하면 nestjs를 거쳐서 스토리지(S3)로 바로 전송하는 경우
>
> > multer도 내부적으로 busboy를 사용한다.

## install

```sh
npm i connect-busboy
```

## main.ts

```ts
import busboy from "connect-busboy";

app.use(busboy());
```

## controller

```ts
import { Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";
@Controller("file")
export class FileController {
  @Post()
  uploadFile(@Req() req: Request) {
    // 📁 write file
    const ws = createWriteStream(join(__dirname, "../../..", "sample.mp4"));
    ws.on("finish", () => {
      console.log("File Written");
      ws.close();
    });

    // 🚎 busboy
    req.pipe(req.busboy);
    req.busboy.on("file", function (name, file, info) {
      const { filename, encoding, mimeType } = info;
      file.on("data", (data) => {
        console.log(data); // stream data
        // write file in /assets
        ws.write(data);
      });
      file.on("end", () => {
        console.log("File [" + filename + "] Finished");
      });
      file.on("error", (err) => {
        console.log("Error", err);
      });
    });
  }
}
```

## s3 upload

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
