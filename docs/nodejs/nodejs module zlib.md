# node zlib

> .gz로 압축
>
> > Gzip으로 압축해주는 nodejs 내장 라이브러리

## usage

```js
const zlib = reauire("zlib");
const stream = require('stream')

zlib.createGzip(), // transform stream
zlib.createGunzip(), // transform stream

stream.pipeline(
	fs.createReadStream('big-file.txt')
	zlib.createGzip(), // transform stream
	fs.createWriteStream('big-file.gz')
)
```
