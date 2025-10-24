# nest base pipe image-resize - sharp

> large, medium, small을 배열로 반환하는 이유
>
> > 이미지 크기를 런타임에 동적으로 처리하기가 쉽다

## install

```sh
npm i -D @types/multer
npm i sharp
npm i -D @types/sharp
```

## module

```ts
@Module({
  // sharp에서 Buffer를 사용하려면 반드시 memoryStorage를 사용해야 한다.
  imports: [MulterModule.register({
    storage: memoryStorage()
  })],
  controllers: [AppController],
  providers: [AppService],
})
```

## image-resize.pipe.ts

```ts
import { Injectable, PipeTransform } from "@nestjs/common";
import sharp from "sharp";
import path from "path";

@Injectable()
export class ImageResizePipe implements PipeTransform<Express.Multer.File, Promise<Express.Multer.File[]>> {
  async transform(image: Express.Multer.File): Promise<Express.Multer.File[]> {
    if (!image) return null;
    if (!image.mimetype.includes("image")) return null;
    const large = await this.resizeAndConvert(image, 1200, "large");
    const medium = await this.resizeAndConvert(image, 800, "medium");
    const small = await this.resizeAndConvert(image, 400, "small");
    return [image, large, medium, small];
  }

  async resizeAndConvert(image: Express.Multer.File, width: number, fileNameSuffix: string) {
    const resizedImageBuffer = await sharp(image.buffer).resize(width).webp({ effort: 3 }).toBuffer();
    const originalName = path.parse(image.originalname).name;
    return {
      ...image,
      buffer: resizedImageBuffer,
      originalname: `${originalName}_${fileNameSuffix}.webp`,
    };
  }
}

export type Image = {
  id: number;
  name: string;
  size: number;
  type: string;
  originalUrl: string;
  smallUrl: string;
  mediumUrl: string;
  largeUrl: string;
};
```

## controller

```ts
import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { memoryStorage } from "multer";
import { Image, ImageResizePipe } from "../../pipes/image-resize.pipe";
import { UploadService } from "./upload.service";

@Controller("upload")
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post()
  @UseInterceptors(FileInterceptor("file"))
  async upload(
    @UploadedFile(ImageResizePipe)
    images: Image[],
  ) {
    console.log(images);
  }
}
```
