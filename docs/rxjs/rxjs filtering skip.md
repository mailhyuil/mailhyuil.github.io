# rxjs filtering skip

> 지정된 수만큼 값을 건너뛰고 나머지 값을 방출합니다.

```js
import { range } from "rxjs";
import { skip } from "rxjs/operators";

range(1, 5).pipe(skip(2)).subscribe(console.log);

// Outputs
// 3
// 4
// 5
```
