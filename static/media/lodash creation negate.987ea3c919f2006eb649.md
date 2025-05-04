# lodash creation negate

> negate === 무효화 하다.
>
> > true를 false로, false를 true로 바꿔주는 함수이다.

```js
import negate from "lodash/negate";

function isEven(n) {
  return n % 2 == 0;
}

filter([1, 2, 3, 4, 5, 6], negate(isEven));
// [1, 3, 5]
```
