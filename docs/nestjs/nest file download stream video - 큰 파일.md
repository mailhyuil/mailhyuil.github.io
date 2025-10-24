# nest file download stream video - 큰 파일

> stream을 사용하면 파일을 in-memory에 저장하지 않고 바로 스트림으로 읽어서 처리할 수 있다.
>
> > Content-Type을 명시하지 않으면 Content-Type: application/octet-stream 으로 보내진다.
> >
> > > 헤더에 Transfer-Encoding: chunked가 자동으로 들어감 (for문이나 interval을 사용해도 chunked로 보내진다.)

## stream 사용 (express 방식)

```ts
@Get()
getFile(@Res() res: Response) {
    const readStream = createReadStream(join(process.cwd(), 'hello.txt'));
    readStream.pipe(res as unknown as NodeJS.WritableStream);
}
```

## Streamable File class 사용 (nestjs 방식)

```ts
import { Controller, Get, StreamableFile, Res, Req } from "@nestjs/common";
import { createReadStream } from "fs";
import { join } from "path";
import { Response, Request } from "express";

@Controller("files")
export class FileController {
  @Get()
  getFile(@Req() req: Request, @Res({ passthrough: true }) res: Response): StreamableFile {
    const filepath = join(process.cwd(), "sample.mp4");
    const stat = fs.statSync(filepath);
    const fileSize = stat.size;
    const range = req.headers.range; // bytes=0-

    // range 헤더가 없으면 전체 파일을 보내준다.
    if (!range) {
      const readStream = createReadStream(filepath);
      res.set({
        "Accept-Ranges": "bytes", // 구간 스킵 가능 (프로그래스바를 클릭해서 넘어갈 수 있게 해줌)
        "Content-Type": "video/mp4",
        "Content-Length": fileSize,
      });
      return new StreamableFile(readStream);
    }

    // range 헤더가 있으면 구간을 보내준다.
    const MAX_CHUNK_SIZE = 1000 * 1000 * 50; // 50MB
    // range헤더 파싱
    const parts = range.replace(/bytes=/, "").split("-");

    // 재생 구간 설정
    const start = parseInt(parts[0], 10);
    const _end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const end = Math.min(_end, start + MAX_CHUNK_SIZE - 1);

    const header = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Type": "video/mp4",
      "Content-Length": fileSize - 1,
    };
    res.writeHead(206, header); // 206: Partial Content
    const readStream = fs.createReadStream(filepath, { start, end });
    readStream.pipe(res);
  }
}
```
