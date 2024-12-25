# algorithm greedy (탐욕 알고리즘)

> '현재 주어진 조건' 중 '최선의 조건'을 골라내는 알고리즘
>
> > 최적의 해는 구할 수 없다 그러나 "근사해"를 구할 수 있고 빠르다.
> >
> > > 탐욕 알고리즘을 사용해도 최적의 해를 구할 수 있는 경우도 있다. (e.g. 거스름 돈 문제)
> > >
> > > > 이런 경우 사용해라

## 거스름돈 문제

> 각 화폐 단위가 배수 관계에 속하기 때문에 그리디 알고리즘이 성립

```js
const money = 6480;

function cal(current) {
  const coins = [500, 100, 50, 10];
  let sum = 0;
  for (let i = 0; i < coins.length; i++) {
    const res = current / coins[i];
    sum += parseInt(res);
    current = current % coins[i];
  }
  return sum;
}
const res = cal(money);
console.log(res); // 동전 20개
```
