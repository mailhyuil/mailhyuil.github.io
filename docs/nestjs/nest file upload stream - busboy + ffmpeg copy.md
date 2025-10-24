# nest file upload stream - busboy + ffmpeg copy

```ts
import { Controller, Get, Post, Req, Res, StreamableFile } from "@nestjs/common";
import { Request, Response } from "express";
import ffmpeg from "fluent-ffmpeg";
import fs, { createReadStream, createWriteStream } from "fs";
import { join } from "path";

@Controller()
export class FileController {
  @Post()
  uploadFile(@Req() req: Request) {
    const outputPath = __dirname;
    // 📁 write file
    const ws = createWriteStream(join(outputPath, "sample.mkv"));
    ws.on("close", () => {
      console.log("WriteStream closed");
      // 💿 ffmpeg transcoding start
      setTimeout(() => {
        ffmpeg()
          .input(join(outputPath, "sample.mkv"))
          .outputOptions("-vf", "scale=1280:720")
          .outputOptions("-f", "mp4")
          .on("progress", (progress) => {
            console.log(`Processing: ${progress.percent}% done`);
          })
          .on("end", () => {
            console.log("해상도 변환이 완료되었습니다.");
          })
          .on("error", (err) => {
            console.error("오류 발생:", err);
          })
          .save(join(outputPath, "sample.mp4"));
      }, 3000);
    });
    ws.on("finish", () => {
      console.log("WriteStream finished");
    });

    // 🚎 busboy
    req.pipe(req.busboy);
    req.busboy.on("file", function (name, file, info) {
      const { filename, encoding, mimeType } = info;
      file.on("data", (data) => {
        console.log(data); // stream data
        ws.write(data);
      });
      file.on("end", () => {
        console.log("busboy ended");
        ws.end();
        ws.close();
      });
      file.on("error", (err) => {
        console.log("busboy error : ", err);
      });
    });
  }
}
```
