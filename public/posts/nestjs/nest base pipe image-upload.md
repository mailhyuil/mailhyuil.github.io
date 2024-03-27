# nest base pipe image-upload

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

## pipe

```ts
import { Injectable, PipeTransform } from "@nestjs/common";
import sharp from "sharp";

@Injectable()
export class ImageResizePipe implements PipeTransform<Express.Multer.File, Promise<Express.Multer.File | Express.Multer.File[]>> {
  async transform(imageOrImages: Express.Multer.File | Express.Multer.File[]): Promise<Express.Multer.File | Express.Multer.File[]> {
    if (imageOrImages instanceof Array) {
      const promises = imageOrImages.filter((img) => img.mimetype.includes("image")).map((img) => this.resizeIntoThreeSizes(img));

      const resizedImages = await Promise.all(promises);
      return resizedImages;
    }

    if (!imageOrImages.mimetype.includes("image")) return null;
    return this.resizeIntoThreeSizes(imageOrImages);
  }

  async resizeIntoThreeSizes(image: Express.Multer.File) {
    const small = await this.resizeAndConvert(400, "small");
    const medium = await this.resizeAndConvert(800, "medium");
    const large = await this.resizeAndConvert(1200, "large");

    return [small, medium, large];
  }

  async resizeAndConvert(image: Express.Multer.File, width: number, fileNameSuffix: string) {
    const resizedImageBuffer = await sharp(image.buffer).resize(width).webp({ effort: 3 }).toBuffer();
    image.buffer = resizedImageBuffer;
    image.originalname = `${image.originalname}_${fileNameSuffix}.webp`;
    resizedImage[fileNameSuffix] = image;
  }
}

export type ResizedImageType = {
  large: Express.Multer.File;
  medium: Express.Multer.File;
  small: Express.Multer.File;
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
    images: Image[]
  ) {
    console.log(images);
  }
}
```
