# assert

> true인지 확인하고 false이면 에러를 내는 것
>
> > 이런 구조를 가진 함수는 assert 이름을 붙일 것

```ts
console.assert(condition, "condition is false");
// =
if (!condition) {
  console.error("condition is false");
  throw new Error();
}
```
