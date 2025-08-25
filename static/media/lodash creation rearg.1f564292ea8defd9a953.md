# lodash creation rearg

> `rearg`는 함수의 인자 순서를 바꿔주는 함수이다.

```js
import rearg from "lodash/rearg";

const rearged = rearg(
  (a, b, c) => [a, b, c],
  [2, 0, 1] // 인자 순서를 바꿔준다.
);

rearged("b", "c", "a");
// ['a', 'b', 'c']
```
