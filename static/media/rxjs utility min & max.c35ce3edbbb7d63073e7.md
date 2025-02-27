# rxjs min & max

```js
const source$ = of(1, 2, 3);
const res$ = source$.pipe(max());
res$.subscribe((val) => console.log(val)); // 3
```
