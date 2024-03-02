# lodash creation flow

> 함수를 받아서 함수를 반환한다. (함수 합성 함수)
>
> > rxjs의 pipe와 비슷하다.

```js
import { flow } from "lodash-es";

const fn = flow(
  (x) => x + 10,
  (x) => x * 2,
  console.log
);

fn(0); // 20
```
