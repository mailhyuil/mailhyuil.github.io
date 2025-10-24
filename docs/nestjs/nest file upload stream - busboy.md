# nest file busboy

> 파일을 in-memory에 저장하지 않고 바로 스트림으로 읽어서 처리할거라면 busboy를 사용하는 것이 좋다.
>
> > 파일을 업로드하면 nestjs를 거쳐서 스토리지(S3)로 바로 전송하는 경우
>
> > multer도 내부적으로 busboy를 사용한다.

## install

```sh
npm i connect-busboy
npm i -D @types/connect-busboy
```

## main.ts

```ts
import busboy from "connect-busboy";

app.use(busboy());
```

## controller

```ts
import { Request } from "express";
import fs, { createWriteStream } from "fs";

uploadByStream(dir: string, req: Request) {
  return new Promise<string>((resolve, reject) => {
    req.pipe(req.busboy);

    req.busboy.on("file", (name, file, info) => {

      const { filename } = info;
      const encodedName = Buffer.from(filename, "latin1").toString("utf8");
      const path = `${dir}/${dayjs().month() + 1}/${dayjs().date()}`;
      const finalDir = `${this.options.dir}/${path}`;
      if (!fs.existsSync(finalDir)) {
        fs.mkdirSync(finalDir, { recursive: true });
      }
      const key = `${path}/${encodedName}`;
      const ws = createWriteStream(`${this.options.dir}/${key}`);

      ws.on("close", () => {
        console.log("Write Stream Closed");
      });

      ws.on("finish", () => {
        console.log("Write Stream Finished");
      });

      file.on("data", (data) => {
        ws.write(data);
      });

      file.on("end", () => {
        console.log("busboy ended");
        ws.end();
        ws.close();
        resolve(key);
      });

      file.on("error", (err) => {
        console.error("busboy error : ", err);
        reject(err);
      });
    });
  });
}
```

## angular

```ts
const formData = new FormData();
formData.append("file", file);

http.post("http://localhost:3000/file", formData).subscribe();
```
