# algorithm Dynamic Programming - 동적 계획법

- 큰 문제를 작은 문제로 나누고 겹치는 문제의 결과를 저장하여 중복 계산을 피하는 알고리즘
- 메모리를 더 사용해서 시간 복잡도를 개선

## DP의 흐름

1. 상태 정의(dp[i] 의미 정하기)
2. 점화식 만들기 `e.g. dp[i] = min(dp[i-1], dp[i-2]) + cost[i]`
3. 초기값(Base case) 설정
4. 반복/재귀로 계산

## 점화식

> 인접한 항을 사용해서 현재 값을 결정하는 관계식을 의미
>
> > 최적 부분 구조를 만족한다 === 점화식으로 표현 할 수 있다.
> >
> > > 피보나치 수열의 점화식 => 𝑎𝑛 = 𝑎𝑛−1 + 𝑎𝑛−2 (𝑎1 = 1, 𝑎2 = 1)

## 점화식 vs 재귀함수

> 점화식은 재귀함수로 표현할 수 있다.
>
> > 재귀함수의 종료조건 === 점화식의 초기항
> >
> > > 재귀함수의 문제점 => 이미 해결한 문제를 또 해결해야한다.

## 구현

> 한번 해결한 문제를 배열에 담아둔다.
>
> > 이미 구한 함수 값을 담는 테이블을 흔히 DP 테이블이라고 한다.

## 상향식 접근법 vs 하향식 접근법

둘 다 사용이 가능하다면 상향식으로 풀어라

### 상향식 (Bottom-Up)

반복문을 이용해 초기 항부터 계산

```js
const fibo = n => {
  // 한번 계산된 결과를 메모이제이션(Memoization)하기 위한 DP 테이블 초기화
  const dpTable = new Array(n + 1).fill(0);
  // 첫 번째 피보나치 수와 두 번째 피보나치 수는 1
  dpTable[1] = 1;
  dpTable[2] = 1;
  // 피보나치 함수(Fibonacci Function) 반복문으로 구현(바텀업 다이나믹 프로그래밍)
  for (let i = 3; i <= n; i++) {
    dpTable[i] = dpTable[i - 1] + dpTable[i - 2];
  }
  return dpTable[n];
};

console.log(fibo(10));
```

### 하향식 (Top-Down)

재귀 함수를 이용해 큰 항을 구하기 위해 작은(이전) 항을 호출하는 방식

```js
function fibo(n) {
  const dpTable = new Array(n + 1).fill(0);

  // 탈출 조건
  if (n == 1 || n == 2) return 1;

  // 이미 계산한 적 있는 문제라면 그대로 반환
  if (dpTable[n] != 0) return dpTable[n];

  // 아직 계산하지 않은 문제라면 점화식에 따라서 피보나치 결과 반환
  dpTable[n] = fibo(n - 1) + fibo(n - 2);

  return dpTable[n];
}
console.log(fibo(10));
```
