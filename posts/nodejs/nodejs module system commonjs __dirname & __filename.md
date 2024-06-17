# nodejs module system commonjs \_\_dirname & \_\_filename

> commonjs 모듈 시스템에서 사용되는 특수한 변수
>
> > esm에서는 import.meta.dirname, import.meta.filename을 사용 // es201

## project/main.js

```js
// 현재 파일의 디렉토리 경로
// e.g. /project
__dirname; // === import.meta.dirname;
// 현재 파일의 경로
// e.g. /project/main.js
__filename; // === import.meta.filename;
```
