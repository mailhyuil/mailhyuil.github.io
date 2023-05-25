# rxjs share()

> 구독이 여러개일 시 사용

```ts
const source = interval(1000).pipe(
  tap((x) => console.log("Processing: ", x)),
  map((x) => x * x),
  take(6),
  share()
);
```
