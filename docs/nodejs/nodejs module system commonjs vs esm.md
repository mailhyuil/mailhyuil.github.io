# nodejs module system commonjs vs esm

## commonjs (require)

> 동기적 & 동적 로딩
>
> > commonjs는 런타임 시에 동적으로 모듈을 로딩하기 때문에, 빌드 단계에서 모듈 간의 의존 관계를 파악하기 어렵습니다.

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

## esm (import)

> 비동기적 & 정적 로딩
>
> > 따라서 ESM은 빌드 단계에서 정적 분석을 통해 모듈 간의 의존 관계를 파악할 수 있고, Tree-shaking을 쉽게 할 수 있습니다.

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
