# nodejs module stream interface duplex

> 양방향 스트림
>
> > Readable과 Writable 스트림을 모두 구현한 스트림

```js
const { PassThrough } = require("stream"); // The PassThrough stream is a basic type of Duplex stream
const tunnel = new PassThrough();

// 직접 구현
new Duplex({
  read(size) {
    this.push("Duplex stream data!");
    this.push(null); // No more data to push
  },
  write(chunk, encoding, callback) {
    console.log("Writing to duplex stream:", chunk.toString());
    callback(); // Signal that the chunk has been processed
  },
});
```
