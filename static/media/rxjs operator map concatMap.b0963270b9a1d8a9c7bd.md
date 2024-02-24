# rxjs map concatMap

> Observable이 값을 방출할 때마다 inner Observable의 값을 전부 방출할 때까지 기다립니다.

```js
const source = of(1, 2, 3);
const inner = of('A', 'B', 'C');
const result = source.pipe(
  concatMap((val) => inner.pipe(map(innerVal => `${val}-${innerVal}`))
);
result.subscribe(x => console.log(x));

// Output:
// 1-A
// 1-B
// 1-C
// 2-A
// 2-B
// 2-C
// 3-A
// 3-B
// 3-C
```
