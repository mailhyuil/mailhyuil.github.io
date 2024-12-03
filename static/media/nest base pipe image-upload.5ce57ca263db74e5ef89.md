# nest base pipe image-upload

> large, medium, small을 배열로 반환하는 이유
>
> > 이미지 크기를 런타임에 동적으로 처리하기가 쉽다

## image-upload.pipe.ts

```ts
import { Injectable, PipeTransform } from "@nestjs/common";
import { CreateImageDTO } from "../app/file/file.dto";
import { FileService } from "../app/file/file.service";
import { PrismaService } from "../prisma/prisma.service";
import { hashFile } from "../utils/hash-file";

@Injectable()
export class ImageUploadPipe implements PipeTransform<Express.Multer.File[], Promise<CreateImageDTO>> {
  constructor(private readonly fileService: FileService, private readonly prisma: PrismaService) {}
  async transform(files: Express.Multer.File[]): Promise<CreateImageDTO> {
    if (!files) return undefined;
    if (!(files instanceof Array)) return;
    const found = await this.prisma.image.findUnique({
      where: {
        originalUrl: await this.fileService.createUrl(files[0]),
      },
      select: {
        hash: true,
      },
    });
    if (found?.hash === (await hashFile(files[0]))) return undefined;
    return await this.fileService.uploadImage(files);
  }
}
```
