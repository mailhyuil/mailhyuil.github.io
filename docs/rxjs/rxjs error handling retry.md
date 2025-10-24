# rxjs error handling retry

```js
import { interval, mergeMap, throwError, of, retry } from "rxjs";

const source = interval(1000);
const result = source.pipe(
  mergeMap((val) => (val > 5 ? throwError(() => "Error!") : of(val))),
  retry(2) // retry 2 times on error
);

result.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(`${err}: Retried 2 times then quit!`),
});

// Output:
// 0..1..2..3..4..5..
// 0..1..2..3..4..5..
// 0..1..2..3..4..5..
// 'Error!: Retried 2 times then quit!'
```
