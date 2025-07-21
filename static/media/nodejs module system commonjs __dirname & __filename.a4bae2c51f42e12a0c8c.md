# nodejs module system commonjs \_\_dirname & \_\_filename

> commonjs 모듈 시스템에서 사용되는 특수한 변수
>
> > esm에서는 import.meta.dirname, import.meta.filename을 사용 // es201

## project/main.js

```js
/* 현재 파일의 디렉토리 경로 */
// commonjs
__dirname; // "/project"
// Node.js version 20.11.0 이상부터 사용 가능
import.meta.dirname;
/* 현재 파일의 경로 */
__filename; // "/project/main.js"
// Node.js version 20.11.0 이상부터 사용 가능
import.meta.filename;

// import.meta.dirname 이 없을 경우 대체 방법
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```
