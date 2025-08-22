# js 소수점 연산

> js의 number는 double 형이다.
>
> > 부동소수점 방식의 연산은 정확한 값이 아닌 근사치를 반환
> >
> > > 이로 인해 정밀도 손실과 오차가 발생

## 문제

```js
const res = 0.1 + 0.2;
console.log(res); // 0.30000000000000004
```

## 해결

```js
const res = (0.1 + 0.2).toFixed(1);
console.log(res); // 0.3

const res = Math.round((0.1 + 0.2) * 10) / 10;
console.log(res); // 0.3
```
