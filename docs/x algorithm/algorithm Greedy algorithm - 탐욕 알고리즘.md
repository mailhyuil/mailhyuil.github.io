# algorithm Greedy algorithm - 탐욕 알고리즘

> '현재 주어진 조건' 중 '최선의 조건'을 골라내는 알고리즘 (**당장 눈앞에서 가장 좋아 보이는 선택을 욕심내서 택한다**라는 의미에서 붙여진 이름)
>
> > 가장 좋아보이는(e.g. 가장 큰 수)를 선택 시 최적의 해를 구할 수 있는 경우 사용
> >
> > > 최적의 해를 구할 수 없는 경우 근사해를 빠르게 구할 수 있지만 **최적의 해가 필요한 경우에는 사용하면 안된다.**

## 거스름돈 문제

각 화폐 단위가 배수 관계에 속하기 때문에 그리디 알고리즘으로 해결할 수 있다.

```js
const money = 6480;

function cal(current) {
  const coins = [500, 100, 50, 10];
  let sum = 0;
  for (let i = 0; i < coins.length; i++) {
    const res = current / coins[i];
    sum += Math.floor(res);
    current = current % coins[i];
  }
  return sum;
}
const res = cal(money);
console.log(res); // 동전 20개
```
