# rxjs creation scheduler interval

```ts
import { interval, take } from "rxjs";

const numbers = interval(1000);

const takeFourNumbers = numbers.pipe(take(4));

takeFourNumbers.subscribe((x) => console.log("Next: ", x));

// Logs:
// Next: 0
// Next: 1
// Next: 2
// Next: 3
```
