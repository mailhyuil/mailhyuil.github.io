# nest base pipe file-diff

## file-diff.pipe.ts

```ts
import { ArgumentMetadata, Inject, Injectable, PipeTransform } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";
import { FileDiffResult, FileService } from "../app/file/file.service";
import { PrismaService } from "../prisma/prisma.service";
export const FileDiffPipeFn = ({ field }: { field: string }) => {
  @Injectable()
  class FileDiffPipe implements PipeTransform<Express.Multer.File[], Promise<FileDiffResult>> {
    constructor(
      private readonly fileService: FileService,
      private readonly prisma: PrismaService,
      @Inject(REQUEST) private readonly request: Request,
    ) {}

    async transform(
      fileOrFiles: Express.Multer.File | Express.Multer.File[],
      metadata: ArgumentMetadata,
    ): Promise<FileDiffResult> {
      if (!this.request.params.id) return;
      if (!fileOrFiles) return;

      const files = await this.prisma.file.findMany({
        where: {
          [field]: this.request.params.id,
        },
      });

      let res: FileDiffResult;
      if (fileOrFiles instanceof Array) {
        if (!fileOrFiles.length) return;
        res = await this.fileService.diff({
          newMulterFiles: fileOrFiles,
          oldFileDTOs: files,
        });
      } else {
        res = await this.fileService.diff({
          newMulterFiles: [fileOrFiles],
          oldFileDTOs: files,
        });
      }
      return res;
    }
  }
  return FileDiffPipe;
};
```
