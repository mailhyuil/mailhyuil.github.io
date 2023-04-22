# divide and conquer

> 커다란 문제를 더 이상 쪼갤 수 없을만큼 분할하여 정복하고 다시 조합하는 과정
>
> > 일반적으로 재귀 함수를 사용하기 때문에 함수 호출 횟수가 많아 오버헤드가 발생 할 수 있다.
> >
> > > 함수를 호출할 때마다 베이스 조건에 가까워져야 한다. 자기 자신을 호출할 때, 넣을 인자를 한 단계 더 간단해지도록 조작한다.

1. 분할(divide)
2. 정복(conquer)
3. 조합(combine)

## 하노이 탑

> 분할 정복의 대표적인 예
>
> > n-1개일때 가능하다면 n개일때도 가능하다

```js
function solution(n) {
  const answer = [];

  const hanoi = (n, start, mid, end) => {
    if (n === 1) answer.push([start, end]);
    else {
      hanoi(n - 1, start, end, mid);
      answer.push([start, end]);
      hanoi(n - 1, mid, start, end);
    }
  };

  hanoi(n, 1, 2, 3);
  return answer;
}

const res = solution(2);
console.log(res);
```
