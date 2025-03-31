# nest file download stream

> stream을 사용하면 파일을 in-memory에 저장하지 않고 바로 스트림으로 읽어서 처리할 수 있다.
>
> > Content-Type을 명시하지 않으면 Content-Type: application/octet-stream 으로 보내진다.
> >
> > > 헤더에 Transfer-Encoding: chunked가 자동으로 들어감 (for문이나 interval을 사용해도 chunked로 보내진다.)

## stream 사용 (express 방식)

```ts
@Get()
getFile(@Res() res: Response) {
    const stream = createReadStream(join(process.cwd(), 'hello.txt'));
    stream.pipe(res as unknown as NodeJS.WritableStream);
}
```

## Streamable File class 사용 (nestjs 방식)

```ts
import { Controller, Get, StreamableFile, Res } from "@nestjs/common";
import { createReadStream } from "fs";
import { join } from "path";
import type { Response } from "express";

@Controller("files")
export class FileController {
  @Get()
  getFile(@Res({ passthrough: true }) res: Response): StreamableFile {
    const filepath = join(process.cwd(), "sample.mp4");
    const fileStat = statSync(filepath);
    const fileSize = fileStat.size;
    res.set({
      "Accept-Ranges": "bytes", // 구간 스킵 가능 (프로그래스바를 클리해서 넘어갈 수 있게 해줌)
      "Content-Type": "video/mp4",
      "Content-Disposition": 'attachment; filename="sample.mp4"',
      "Content-Length": fileSize.toString(),
    });
    const readStream = createReadStream(filepath);
    return new StreamableFile(readStream);
  }
}
```

## express version

```ts
@Controller("files")
export class FileController {
  @Get()
  getFile(@Res() res: Response): StreamableFile {
    const filepath = join(process.cwd(), "sample.mp4");
    const fileStat = statSync(filepath);
    const fileSize = fileStat.size;
    res.set({
      "Accept-Ranges": "bytes", // 구간 스킵 가능 (프로그래스바를 클리해서 넘어갈 수 있게 해줌)
      "Content-Type": "video/mp4",
      "Content-Disposition": 'attachment; filename="sample.mp4"',
      "Content-Length": fileSize.toString(),
    });
    const readStream = createReadStream(join(process.cwd(), "sample.mp4"));
    readStream.pipe(res);
  }
}
```
