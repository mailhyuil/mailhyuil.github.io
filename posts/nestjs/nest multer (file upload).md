# nest file upload (multer)

> nest는 multer라고 하는 미들웨어를 제공
>
> > multer는 multipart/form-data 포멧을 다룰 수 있다.

[multer_doc](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)

## install

```sh
npm i -D @types/multer
```

## client

> client에서 FormData(multipart/form-data) 객체에 file을 넣고 body에 담아 POST

```js
import { useFileDialog } from "@vueuse/core";

const { files, open, reset } = useFileDialog();

const submit = async () => {
  const data = new FormData();

  if (files.value) {
    data.append("file", files.value[0]);

    await useFetch("http://localhost:4200/upload", {
      method: "POST",
      body: data,
    });
  }
};
```

## server

> server(nest)에서 FileInterceptor를 사용해 file 받기
>
> > multerOptions를 사용해 file을 어떻게 처리할 지 지정 ex) disk에 저장, s3에 저장 ... filtering

```ts
import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { existsSync, mkdirSync } from "fs";
import { diskStorage } from "multer";
import { UploadService } from "./upload.service";
const options: MulterOptions = {
  storage: diskStorage({
    destination: (request, file, callback) => {
      const uploadPath: string = "public";
      if (!existsSync(uploadPath)) {
        // public 폴더가 존재하지 않을시, 생성
        mkdirSync(uploadPath);
      }

      callback(null, uploadPath);
    },

    filename: (request, file, callback) => {
      callback(null, "hi.png"); // filename uuid로 변환해서 지정하기
    },
  }),
};

@Controller("upload")
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post()
  @UseInterceptors(FileInterceptor("file", options))
  async upload(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
```
