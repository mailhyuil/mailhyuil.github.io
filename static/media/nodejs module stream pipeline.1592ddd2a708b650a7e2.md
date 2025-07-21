# stream pipeline

> 스트림들을 묶어주는 역할
>
> > transform 스트림을 쉽게 활용할 수 있게 해준다

```js
const stream = require("stream");

stream.pipeline(
  fs.createReadStream("big-file.txt"),
  zlib.createGzip(), // transform
  fs.createWriteStream("big-file.gz"),
);

stream.pipeline(
  fs.createReadStream("big-file.gz"),
  zlib.createGunzip(), // transform
  fs.createWriteStream("big-file.txt"),
);
```
