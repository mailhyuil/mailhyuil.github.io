# rxjs groupBy

```js
const source$ = of(1, 2, 3, 4, 5);
const res$ = source$.pipe(
  groupBy((val) => val % 2), // 짝수, 홀수 값을 기준으로 그룹된 observable을 만든다.
  mergeMap((group$) => group$.pipe(reduce((acc, cur) => acc + cur, 0)))
);
res$.subscribe((val) => console.log(val));
```
