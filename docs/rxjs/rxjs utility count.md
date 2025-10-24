# rxjs utility count

```js
const source$ = of(1, 2, 3);
const res$ = source$.pipe(count());
res$.subscribe((val) => console.log(val)); // 3
// or
const source$ = of(1, 2, 3);
const res$ = source$.pipe(count((val) => val > 1));
res$.subscribe((val) => console.log(val)); // 2
```
