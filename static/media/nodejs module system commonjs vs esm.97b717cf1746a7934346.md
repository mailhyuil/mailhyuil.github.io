# js module commonjs vs esm

## commonjs 동적으로 구성이 가능함

> 따라서 CJS는 빌드 타임에 정적 분석을 적용하기가 어렵고, 런타임에서만 모듈 관계를 파악할 수 있습니다.

```ts
// require
const utilName = /* 동적인 값 */
const util = require(`./utils/${utilName}`);

// module.exports
function foo() {
  if (/* 동적인 조건 */) {
    module.exports = /* ... */;
  }
}
foo();
```

## esm 항상 정적이여야함

> 따라서 ESM은 빌드 단계에서 정적 분석을 통해 모듈 간의 의존 관계를 파악할 수 있고, Tree-shaking을 쉽게 할 수 있습니다.

```ts
/* 불가능 
 import util from `./utils/${utilName}.js`;
 */

import { add } from "./utils/math.js"; // 가능

/* 불가능
  function foo() {
    export const value = "foo"; // 불가능
  }
*/

export const value = "foo"; // 가능
```
