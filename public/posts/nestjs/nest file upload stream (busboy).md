# nest file busboy

> 파일을 in-memory에 저장하지 않고 바로 스트림으로 읽어서 처리할거라면 busboy를 사용하는 것이 좋다.
>
> > multer도 내부적으로 busboy를 사용한다.

## install

```sh
npm i connect-busboy
```

## main.ts

```ts
import busboy from "connect-busboy";
app.user(busboy());
```

## controller

```ts
import { Controller, Post, Req, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor, FileInterceptor } from "@nestjs/platform-express";
import { options } from "./multer-option";
@Controller("file")
export class FileController {
  @Post()
  async uploadFile(@Req() req: any) {
    req.pipe(req.busboy);
    req.busboy.on("file", function (name, file, info) {
      const { filename, encoding, mimetype } = info;
      file.on("data", (data) => {
        console.log(data); // stream data
      });
    });
  }
}
```
