# rxjs startWith

> startWith(data) : data 값을 먼저 emit함

```js
import { map, startWith, timer } from "rxjs";

timer(0)
  .pipe(
    map(() => "timer emit"),
    startWith("timer start")
  )
  .subscribe((x) => console.log(x));

// results:
// 'timer start'
// 'timer emit'
```
