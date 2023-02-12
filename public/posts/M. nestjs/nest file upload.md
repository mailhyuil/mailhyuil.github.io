# nest file upload

> nest는 multer라고 하는 빌트인 미들웨어를 제공
>
> > multer는 multipart/form-data 포멧을 다룰 수 있다.

## install

```
yarn add @types/multer
```

## 사용

> FileInterceptor를 사용하여 파일 매개변수를 가로채기
>
> > file 매개변수 앞에는 @UploadedFile() 데코레이터를 사용

```ts
@Post('upload')
@UseInterceptors(FileInterceptor('file')) // file이라는 이름의 매개변수를 가로채기
uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file);
}
```
