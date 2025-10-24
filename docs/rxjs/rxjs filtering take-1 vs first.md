# rxjs take(1) vs first

> first는 마지막 값이 없으면 에러가 발생
>
> > take(1)은 없어도 에러가 발생하지 않음

```ts
// Error
EMPTY.pipe(first()).subscribe(console.log, (err) => console.log("Error", err));

// Error
range(1, 5)
  .pipe(first((val) => val > 6))
  .subscribe(console.log, (err) => console.log("Error", err));
```
