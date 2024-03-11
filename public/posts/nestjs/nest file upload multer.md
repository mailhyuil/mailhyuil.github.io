# nest file upload (multer)

> nest는 multer라고 하는 미들웨어를 제공
>
> > multer는 multipart/form-data 포멧을 다룰 수 있다.
> >
> > > formData는 string 값만 받을 수 있다. "true", "false" 또는 "0", "1"으로 사용
> > >
> > > > [multer_doc](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)

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

## server UseInterceptors

> server(nest)에서 FileInterceptor를 사용해 file 받기
>
> > multerOptions를 사용해 file을 어떻게 처리할 지 지정 (e.g. disk에 저장, s3에 저장 ... filtering)

### options

```ts
export const diskStorageOptions: MulterOptions = {
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
export const memoryStorageOptions: MulterOption = {
  storage: memoryStorage(),
};
```

### controller

> FileInterceptor와 FilesInterceptor를 구별해라
>
> > UploadedFile과 UploadedFiles를 구별해라

```ts
import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor, FileInterceptor } from "@nestjs/platform-express";
import { options } from "./multer-option";

@Controller("file")
export class FileController {
  @Post()
  @UseInterceptors(FileInterceptor("file", options))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @Post("multiple")
  @UseInterceptors(FileInterceptor("files", options))
  async uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    console.log(files);
  }

  @Post("multiple-fields")
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: "file1", maxCount: 1 },
        { name: "file2", maxCount: 1 },
      ],
      options
    )
  )
  async uploadMultiFieldFiles(
    @UploadedFiles()
    files: {
      file1: Express.Multer.File[];
      file2: Express.Multer.File[];
    }
  ) {
    console.log(files);
  }
}
```
