# nodejs stream readable & writable

> fs 모듈의 메소드로 생성한다.

```js
const fs = require("fs");

// Readable Stream
const rs = fs.createReadStream("file_path", { encoding: "utf8" });
rs.on("data", () => {});
rs.on("end", () => {});
rs.on("error", () => {});

// Writable Stream
const ws = fs.createWriteStream("file_path");
ws.write("hello, world");
ws.end(); // finish 이벤트 발생 // 쓰기가 끝났다는 것을 명시
ws.close(); // close 이벤트 발생 // 파일을 닫는 것
ws.on("finish", () => {});
ws.on("close", () => {});
ws.on("error", () => {});
```

## 바이너리 단위로 자르기

```js
const start = 0;
const end = 3000000;
const chunksize = end - start + 1;

const file = createReadStream(join(__dirname, "assets", "sample.mp4"), {
  start,
  end,
});
```
