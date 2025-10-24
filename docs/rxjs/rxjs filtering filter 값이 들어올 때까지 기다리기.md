# rxjs filtering filter 값이 들어올 때까지 기다리기

> 값이 null일 경우, 값이 들어올때 까지 기다리는 방법

## usage

```js
filter((data) => !!data);
filter((data) => data !== null);
```

## 예시

```js
const res = observable$.pipe(
  filter((res) => res !== null),
  tap((res) => {
    hasData = res.arr.some((data) => data.id === this.id);
  })
);
```
