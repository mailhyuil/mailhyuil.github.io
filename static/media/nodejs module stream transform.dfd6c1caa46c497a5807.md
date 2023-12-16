# stream pipeline

> 입력받은 스트림을 변환 후 리턴하는 스트림
>
> > pipeline과 함께 사용한다.

```js
zlib.createGzip(), // transform stream
zlib.createGunzip(), // transform stream

const stream = require('stream')

stream.pipeline(
	fs.createReadStream('big-file.txt')
	zlib.createGzip(), // transform stream
	fs.createWriteStream('big-file.gz')
)
```
