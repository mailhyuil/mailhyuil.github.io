# rxjs creation join zip

> 인덱스에 맞춰서 묶어준다
>
> > 가장 인덱스가 적은 observable을 기준으로 하며 그 이상의 인덱스는 무시된다.

```js
const a$ = of(1, 2);
const b$ = of("a", "b", "c", "d");
zip(a$, b$).subscribe(([a, b]) => console.log({ a, b }));
// {a: 1, b: 'a'}
// {a: 2, b: 'b'}
```
