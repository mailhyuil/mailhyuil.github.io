# nest class-validator nestjs-form-data

> formData를 validation하는 미들웨어
>
> > MemoryStoredFile을 리턴한다.

## install

```sh
npm i nestjs-form-data
```

## post.module.ts

```ts
import { NestjsFormDataModule } from "nestjs-form-data";

@Module({
  imports: [NestjsFormDataModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
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

## pipe

> MemoryStoredFile을 ImageDTO로 변환하는 pipe

```ts
import { Injectable, PipeTransform } from "@nestjs/common";
import { MemoryStoredFile } from "nestjs-form-data";
import { ImageManagerDTO } from "../image-manager.dto";
import { ImageManagerService } from "../image-manager.service";

export const ImageManagerUploadPipeFn = (fieldName: string) => {
  @Injectable()
  class ImageManagerUploadPipe implements PipeTransform<unknown, Promise<unknown>> {
    constructor(private readonly imageManagerService: ImageManagerService) {}
    async transform(body: unknown): Promise<unknown> {
      const files = body[fieldName] as MemoryStoredFile[] | MemoryStoredFile;
      if (!files) return body;

      if (!Array.isArray(files)) {
        body[fieldName] = await this.imageManagerService.upload(files);
        return body;
      }

      const fileDtos: ImageManagerDTO[] = await Promise.all(
        files.map(async file => {
          return this.imageManagerService.upload(file);
        }),
      );

      body[fieldName] = fileDtos;
      return body;
    }
  }
  return ImageManagerUploadPipe;
};
```

## controller

```ts
@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @FormDataRequest()
  create(@Body(ImageManagerUploadPipeFn("image")) body: CreatePostDto): void {
    return await this.postService.create(body);
  }
}
```
