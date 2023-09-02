# nest image resize (sharp)

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
export class ImageResizePipe implements PipeTransform<Express.Multer.File, Promise<Image[]>> {
  async transform(image: Express.Multer.File): Promise<Image[]> {
    const images: Image[] = [];

    const resizeAndConvert = async (width: number, fileNameSuffix: string) => {
      const resizedImage = await sharp(image.buffer).resize(width).webp({ effort: 3 }).toBuffer();

      const fileInfo: Image = {
        fileName: `${image.originalname}_${fileNameSuffix}`,
        fileSize: resizedImage.length,
        type: image.mimetype,
        fieldId: image.fieldname,
      };

      images.push(fileInfo);
    };

    await resizeAndConvert(1200, "large");
    await resizeAndConvert(800, "medium");
    await resizeAndConvert(400, "small");

    return images;
  }
}

export interface Image {
  fileName: string;
  fileSize: number;
  type: string;
  fieldId: string;
}
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
