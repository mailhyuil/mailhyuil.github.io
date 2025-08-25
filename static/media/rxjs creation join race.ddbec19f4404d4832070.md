# rxjs creation join race

> 가장 빨리 도착한 observable만 사용

```js
import { interval, map, race } from "rxjs";

const obs1 = interval(7000).pipe(map(() => "slow one"));
const obs2 = interval(3000).pipe(map(() => "fast one"));
const obs3 = interval(5000).pipe(map(() => "medium one"));

race(obs1, obs2, obs3).subscribe((winner) => console.log(winner));

// Outputs
// a series of 'fast one'
```
