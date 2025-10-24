# rxjs filtering distinct

## distinct

> 중복되는 값을 방출하지 않는다.

```js
import { of, distinct } from "rxjs";

of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
  .pipe(distinct())
  .subscribe((x) => console.log(x));

// Outputs
// 1
// 2
// 3
// 4
```

## distinctUntilChanged

> 이전 값과 같은 값이 방출되면 방출하지 않는다.

## distinctUntilKeyChanged

> 이전 값과 같은 키 값이 방출되면 방출하지 않는다.
