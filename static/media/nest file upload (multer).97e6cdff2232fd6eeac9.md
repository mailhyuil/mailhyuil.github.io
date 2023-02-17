# nest file upload (multer)

> nest는 multer라고 하는 미들웨어를 제공
>
> > multer는 multipart/form-data 포멧을 다룰 수 있다.

[multer_doc](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)

## install

```
yarn add @types/multer
```

## 사용

1. client에서 FormData(multipart/form-data) 객체에 file을 넣고 body에 담아 POST

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

2. server(nest)에서 FileInterceptor를 사용해 file 받기

```ts
@Post('upload')
@UseInterceptors(FileInterceptor('file', multerOptions)) // multerOptions에 storage를 지정하면 자동으로 업로드
upload(@UploadedFile() file: Express.Multer.File) {}
```

3. multerOption에 storage를 지정하면 자동으로 업로드

```ts
const multerOptions = {
  fileFilter: (request, file, callback) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
      // 이미지 형식은 jpg, jpeg, png만 허용합니다.
      callback(null, true);
    } else {
      callback(new HttpError(400, "지원하지 않는 이미지 형식입니다."), false);
    }
  },
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
```
