# nest base pipe file-upload

## file-upload.pipe.ts

```ts
import { Injectable, PipeTransform } from "@nestjs/common";
import { CreateFileDTO } from "../app/file/file.dto";
import { FileService } from "../app/file/file.service";

@Injectable()
export class FileUploadPipe
  implements PipeTransform<Express.Multer.File, Promise<CreateFileDTO | CreateFileDTO[] | undefined>>
{
  constructor(private readonly fileService: FileService) {}
  async transform(
    fileOrFiles: Express.Multer.File | Express.Multer.File[],
  ): Promise<CreateFileDTO | CreateFileDTO[] | undefined> {
    if (!fileOrFiles) return undefined;
    if (fileOrFiles instanceof Array) {
      const fileInfos = await Promise.all(
        fileOrFiles.map(async f => {
          return await this.fileService.upload(f);
        }),
      );
      return fileInfos;
    }
    const fileInfo = await this.fileService.upload(fileOrFiles);
    return fileInfo;
  }
}
```
