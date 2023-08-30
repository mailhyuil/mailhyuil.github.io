# nest multer-s3

## install

```sh
npm i multer-s3
```

## multion-option.factory.ts

```ts
export const multerOptionsFactory = (configService: ConfigService): MulterOptions => {
  const s3 = new S3Client({
    region: configService.get("AWS_REGION"),
    credentials: {
      accessKeyId: configService.get("AWS_ACCESS_KEY_ID"),
      secretAccessKey: configService.get("AWS_SECRET_ACCESS_KEY"),
    },
  });

  return {
    storage: multerS3({
      s3,
      bucket: configService.get("AWS_S3_BUCKET_NAME"),
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: "public-read",
      key(_req, file, done) {
        const ext = path.extname(file.originalname);
        const basename = path.basename(file.originalname, ext);
        done(null, `${basename}_${Date.now()}${ext}`);
      },
    }),
    // limits: { fileSize: 10 * 1024 * 1024 },
  };
};
```

## module

```ts
@Module({
  imports: [
    EnvironmentModule,
    AuthModule,
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: multerOptionsFactory,
      inject: [ConfigService],
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
```

## controller

```ts
@Post()
@UseInterceptors(FileInterceptor('file'))
uploadFile(
  @UploadedFile() file: Express.MulterS3.File // 여기서 S3에 업로드됨 // 인메모리가 아닌 S3 설정
): Promise<string> {
  return this.uploadService.uploadFile(file);
}
```

## service

```ts
async uploadFile(file: Express.MulterS3.File) {
    if (!file) {
        throw new BadRequestException('파일이 존재하지 않습니다.');
    }
    return file.location;
}
```
