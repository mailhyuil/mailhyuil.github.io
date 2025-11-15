# algorithm divide and conquer - 분할 정복

> 커다란 문제를 더 이상 쪼갤 수 없을만큼 분할하여 정복하고 다시 조합하는 과정
>
> > 일반적으로 재귀 함수를 사용하기 때문에 함수 호출 횟수가 많아 오버헤드가 발생 할 수 있다.
> >
> > > 함수를 호출할 때마다 베이스 조건에 가까워져야 한다. 자기 자신을 호출할 때, 넣을 인자를 한 단계 더 간단해지도록 조작한다.

## 분할 정복 과정

1. 분할(divide)
2. 정복(conquer) = 더 이상 쪼갤 수 없을 때까지 분할 하는 것
3. 조합(combine)

## divide conquer and combine

1. 탈출조건에 가까워지도록 divide
2. 탈출조건에 닿으면 conquer된 상태이다.
3. combine 로직을 통해 남아있는 문제 해결

```js
function recur(){
  if () return '' // conquer된 상태

  // divide 로직

  const res = recur()

  // combine 로직

  return res
}
```

## 하노이 탑

> 분할 정복의 대표적인 예
>
> > n-1개일때 가능하다면 n개일때도 가능하다

```js
const answer = [];

const hanoi = (n, start, mid, end) => {
  if (n === 1) {
    answer.push([start, end]);
  } else {
    hanoi(n - 1, start, end, mid);
    answer.push([start, end]);
    hanoi(n - 1, mid, start, end);
  }
};

const N = 2;
hanoi(N, 1, 2, 3);
console.log(answer);
```
