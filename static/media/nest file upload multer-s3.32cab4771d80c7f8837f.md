# nest multer-s3

## install

```sh
npm i multer-s3
```

## multer-option.factory.ts

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
      acl: "public-read",
      contentType: multerS3.AUTO_CONTENT_TYPE,
      bucket: configService.get("AWS_S3_BUCKET_NAME"),
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

## file.module.ts

```ts
@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: multerOptionsFactory,
    }),
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
```

## file.controller.ts

```ts
@Controller("file")
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @UseInterceptors(FileInterceptor("file")) // 여기서 S3에 업로드됨 // 인메모리가 아닌 S3 설정
  upload(@UploadedFile() file: Express.MulterS3.File): Promise<string> {
    return this.fileService.upload(file);
  }
}
```
