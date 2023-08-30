# nest image resize

## install

```sh
npm i -D @types/multer
npm i sharp
npm i -D @types/sharp
```

## module

```ts
@Module({
  // importing MulterModule and use memory storage to use the buffer within the pipe
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
export class SharpPipe implements PipeTransform<Express.Multer.File, Promise<{ large: Buffer; medium: Buffer; small: Buffer }>> {
  async transform(image: Express.Multer.File): Promise<{ large: Buffer; medium: Buffer; small: Buffer }> {
    const large = await sharp(image.buffer).resize(1200).webp({ effort: 3 }).toBuffer();
    const medium = await sharp(image.buffer).resize(800).webp({ effort: 3 }).toBuffer();
    const small = await sharp(image.buffer).resize(400).webp({ effort: 3 }).toBuffer();

    return { large, medium, small };
  }
}
```

## controller

```ts
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  uploadImage(@UploadedFile(SharpPipe) image: string) {
    this.service.uploadImage(image);
  }
```
