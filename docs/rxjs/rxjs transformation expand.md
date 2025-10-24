# rxjs transformation expand

> 재귀 호출을 위해서 사용
>
> > map함수들과 마찬가지로 구독을 대신해줌

```js
const source$ = of(1);
const res$ = source$.pipe(
  expand((val) => {
    return val < 4 ? of(val * 2) : of();
  })
);
res$.subscribe((val) => console.log(val));
```
