# distinctUntilChanged

```js
import { of, distinctUntilChanged } from "rxjs";

const temps$ = of(30, 31, 20, 34, 33, 29, 35, 20);

const recordHighs$ = temps$.pipe(
  distinctUntilChanged((prevHigh, temp) => {
    // If the current temp is less than
    // or the same as the previous record,
    // the record hasn't changed.
    return temp <= prevHigh;
  })
);

recordHighs$.subscribe(console.log);
// Logs: 30, 31, 34, 35
```
