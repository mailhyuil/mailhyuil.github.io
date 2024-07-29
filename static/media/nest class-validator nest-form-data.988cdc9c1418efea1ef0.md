# nestjs-form-data

> formData를 validation하는 미들웨어

## install

```sh
npm i nestjs-form-data
```

## app.module.ts

```ts
import { NestjsFormDataModule } from "nestjs-form-data";

@Module({
  imports: [NestjsFormDataModule],
})
export class AppModule {}
```

## dto

```ts
export class CreatePostDto {
  @ApiProperty()
  @IsFile()
  @MaxFileSize(1e6)
  @HasMimeType(["image/jpeg", "image/png"])
  image: ImageDto;
}
```

## controller

```ts
@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @FormDataRequest()
  @UseInterceptors(FileInterceptor("image"))
  create(@Body() body: CreatePostDto, @FileInterceptor("image") image: Express.Multer.File): void {
    return await this.postService.create(body);
  }
}
```
