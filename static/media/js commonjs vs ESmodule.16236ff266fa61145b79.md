# Commonjs and ES6 Module

> CJS module loader는 동기적으로 작동하고, ESM module loader는 비동기적으로 작동합니다.
>
> > 따라서 ESM에서 CJS를 import 할 수는 있지만, CJS에서 ESM을 require 할 수는 없습니다. 왜냐하면 CJS는 Top-level Await을 지원하지 않기 때문입니다.

## commonjs (cjs)

> require, module.exports, exports.foo 사용

## es6 module (esm or mjs)

> import, export default, export 사용

## .mjs 확장자를 사용하면 es6 module 로 생성

## .cjs 확장자를 사용하면 commonjs 로 생성 (export default만 가능)

```
// abc.mjs
const abc = () => {
  console.log('hello')
}
export default abc;
```

```
// index.js
import abc from './abc.mjs';
abc()
```

## package.json에서 type을 module로 변경하면 사용 가능 import export 사용 가능

## ES6 Module에서 require사용

```
// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);
```
