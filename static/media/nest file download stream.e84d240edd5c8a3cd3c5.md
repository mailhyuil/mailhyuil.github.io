# nest file download stream

> stream을 사용하면 파일을 in-memory에 저장하지 않고 바로 스트림으로 읽어서 처리할 수 있다.

## stream 사용

```ts
@Get('file')
getFile(@Res() res: Response) {
    const file = createReadStream(join(process.cwd(), 'hello.txt'));
    file.pipe(res as unknown as NodeJS.WritableStream);
}
```

## Streamable File class 사용

```ts
import { Controller, Get, StreamableFile, Res } from "@nestjs/common";
import { createReadStream } from "fs";
import { join } from "path";
import type { Response } from "express";

@Controller("file")
export class FileController {
  @Get()
  getFile(@Res({ passthrough: true }) res: Response): StreamableFile {
    const file = createReadStream(join(process.cwd(), "package.json"));
    res.set({
      "Content-Type": "application/json",
      "Content-Disposition": 'attachment; filename="package.json"',
    });
    return new StreamableFile(file);
  }

  // the same as
  //   @Get()
  //   @Header("Content-Type", "application/json")
  //   @Header("Content-Disposition", 'attachment; filename="package.json"')
  //   getStaticFile(): StreamableFile {
  //     const file = createReadStream(join(process.cwd(), "package.json"));
  //     return new StreamableFile(file);
  //   }
}
```
