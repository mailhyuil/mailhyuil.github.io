# profiling memory nodejs heapdump

> v8 엔진의 heap 메모리 덤프를 떠서 분석하는 방법

## install

```sh
npm i heapdump
node-gyp configure build
```

## usage

```js
const heapdump = require("heapdump");
heapdump.writeSnapshot("/var/local/" + Date.now() + ".heapsnapshot");
// 생성된 파일을 chrome devtools memory로 분석
```
