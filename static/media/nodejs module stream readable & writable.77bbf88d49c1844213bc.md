# nodejs stream readable & writable

> fs 모듈의 메소드로 생성한다.

```js
const fs = require("fs");

// Readable Stream
const rs = fs.createReadStream("file_path", { encoding: "utf8" });
rs.on("data", () => {});
rs.on("error", () => {});
rs.on("end", () => {});

// Writable Stream
const ws = fs.createWriteStream("file_path");
ws.write("hello, world");
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
