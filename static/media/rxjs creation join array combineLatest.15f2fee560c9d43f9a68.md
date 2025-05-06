# rxjs creation join combineLatest

> 인덱스에 맞춰서 묶어준다
>
> > 가장 인덱스가 많은 observable을 기준으로 하며 그 이하의 인덱스 가장 마지막 값을 사용한다.

```js
const a$ = of(1, 2);
const b$ = of("a", "b", "c", "d");
combineLatest(a$, b$).subscribe(([a, b]) => console.log({ a, b }));
// {a: 1, b: 'a'}
// {a: 2, b: 'b'}
// {a: 2, b: 'c'}
// {a: 2, b: 'd'}
```
