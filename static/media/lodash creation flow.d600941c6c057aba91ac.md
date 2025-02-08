# lodash creation flow

> 함수를 받아서 함수를 반환한다. (함수 합성 함수)
>
> > rxjs의 pipe와 비슷하다.
> >
> > > chaining과 마찬가지로 지연평가를 지원한다.

```js
import { flow } from "lodash-es";

const fn = flow(
  (x) => x + 10,
  (x) => x * 2,
  console.log
);

fn(0); // 20
```
