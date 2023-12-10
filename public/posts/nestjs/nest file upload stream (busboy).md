# nest file busboy

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
    req.busboy.on("file", function (fieldName, file, fileName) {
      file.on("data", (data) => {
        console.log(data); // stream data
      });
    });
  }
}
```
