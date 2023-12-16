# duplex stream

> 양방향 스트림
>
> > Readable과 Writable 스트림을 모두 구현한 스트림

```js
const { PassThrough } = require("stream"); // The PassThrough stream is a basic type of Duplex stream
const tunnel = new PassThrough();
```
