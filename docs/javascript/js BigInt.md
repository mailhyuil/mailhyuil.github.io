# js BigInt

> 숫자 뒤에 n을 붙이거나 BigInt()를 사용하여 BigInt를 생성할 수 있다.
>
> > BigInt는 BigInt 끼리 연산이 가능하다.
> >
> > > BigInt는 Number와 다르게 정수의 범위가 무한대이다.
> > >
> > > > BigInt와 Number를 연산하는 경우에는 한쪽을 형변환 해주어야 한다.

```js
// 10n = BigInt(10)

const res = 10n + 20n;
const res = BigInt(10) + BigInt(20);
```
