# nodejs module stream interface transform

> 입력받은 스트림을 변환 후 리턴하는 스트림
>
> > pipeline과 함께 사용한다.

```js
zlib.createGzip(); // transform stream
zlib.createGunzip(); // transform stream

const stream = require("stream");

stream.pipeline(
  fs.createReadStream("big-file.txt"),
  zlib.createGzip(), // transform stream
  fs.createWriteStream("big-file.gz"),
);

// 직접 구현
new Transform({
  transform(chunk, encoding, callback) {
    const transformed = chunk.toString().toUpperCase(); // Transform to uppercase
    callback(null, transformed); // Pass the transformed chunk to the next stream
  },
  flush(callback) {
    console.log("Flushing remaining data...");
    callback(); // Signal that all data has been flushed
  },
});
```
