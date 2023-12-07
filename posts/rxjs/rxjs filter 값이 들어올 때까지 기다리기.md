# rxjs filter

> 값이 null일 경우, 값이 들어올때 까지 기다리는 방법

```js
const res = observable$.pipe(
  filter((res) => res !== null),
  tap((res) => {
    hasData = res.arr.some((data) => data.id === this.id);
  })
);
```
