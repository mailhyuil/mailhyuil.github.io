# nest multer file + body 같이 보내기

> Json 대신 FormData에 데이터를 넣어 전송하면 @UploadedFiles와 @Body로 받을 수 있다.
>
> > formData는 string 값만 받을 수 있다. "true", "false" 또는 "0", "1"으로 사용

```ts
@Post()
@UseInterceptors(
  FileFieldsInterceptor([
    { name: 'logo', maxCount: 1 },
    { name: 'banner', maxCount: 1 },
  ])
)
async create(
  @UploadedFiles() formData: { logo: Express.Multer.File[]; banner: Express.Multer.File[] },
  @Body() body: CreateClientDTO
) {
  return await this.clientService.create({ data: body, formData });
}
```
