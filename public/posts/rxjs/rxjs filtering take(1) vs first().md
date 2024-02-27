# rxjs operator take(1) vs first()

> first()는 조건에 맞는 값이 없으면 에러가 발생하지만 take(1)는 단순히 한개만 받는 것

```ts
// Error
EMPTY.pipe(first()).subscribe(console.log, (err) => console.log("Error", err));

// Error
range(1, 5)
  .pipe(first((val) => val > 6))
  .subscribe(console.log, (err) => console.log("Error", err));
```
