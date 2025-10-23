# rxjs operator connect

```js
import { of, tap, connect, merge, map, filter } from "rxjs";

const source$ = of(1, 2, 3, 4, 5).pipe(
  tap({
    subscribe: () => console.log("subscription started"),
    next: (n) => console.log(`source emitted ${n}`),
  })
);

source$
  .pipe(
    // Notice in here we're merging 3 subscriptions to `shared$`.
    // 매개변수로 shared$ observable이 넘어옴
    connect((shared$) =>
      merge(
        shared$.pipe(map((n) => `all ${n}`)),
        shared$.pipe(
          filter((n) => n % 2 === 0),
          map((n) => `even ${n}`)
        ),
        shared$.pipe(
          filter((n) => n % 2 === 1),
          map((n) => `odd ${n}`)
        )
      )
    )
  )
  .subscribe(console.log);
```
