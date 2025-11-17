# algorithm Dynamic Programming - 동적 계획법

- 큰 문제를 작은 문제로 나누고 겹치는 문제의 결과를 저장하여 중복 계산을 피하는 알고리즘
- 메모리를 더 사용해서 시간 복잡도를 개선
- 한번 해결한 문제를 배열에 담아둔다. 이미 구한 함수 값을 담는 테이블을 흔히 DP 테이블 또는 메모이제이션 테이블이라고 한다.
- 상향식(Bottom-Up)과 하향식(Top-Down) 둘 다 사용이 가능하다면 **상향식(Bottom-Up)으로 풀어라**

## DP의 흐름

1. 상태 정의(dp[i] 의미 정하기)
2. 점화식 만들기 `e.g. dp[i] = min(dp[i-1], dp[i-2]) + cost[i]`
3. 초기값(Base case) 설정
4. 반복/재귀로 계산

## 점화식

- 인접한 항을 사용해서 현재 값을 결정하는 관계식을 의미
- 최적 부분 구조를 만족한다 === 점화식으로 표현 할 수 있다. (피보나치 수열의 점화식 => 𝑎𝑛 = 𝑎𝑛−1 + 𝑎𝑛−2 (𝑎1 = 1, 𝑎2 = 1))
- DP Table의 인덱스를 순회하며 Math.min, Math.max 등을 사용하여 최적의 값을 계산하여 최적의 값을 찾으면 update한다.

## 상향식 (Tabulation) (Bottom-Up)

- **반복문**을 사용하는 방법
- 작은 문제부터 시작해서, 큰 문제를 해결하는 방식 (bottom-up)
- 반복문을 이용해 초기 항부터 계산

```js
function fib(n: number): string {
  if (n == 1 || n == 2) return "1"; // 탈출 조건

  // 한번 계산된 결과를 메모이제이션(Memoization)하기 위한 DP 테이블 초기화
  const memo = new Array(n + 1).fill(0);
  // 첫 번째 피보나치 수와 두 번째 피보나치 수는 1
  memo[0] = 0n;
  memo[1] = 1n;
  // 피보나치 함수(Fibonacci Function) 반복문으로 구현(바텀업 다이나믹 프로그래밍)
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n].toString();
}

console.log(fib(90));
```

## 하향식 (Top-Down)

- **재귀 + 메모이제이션(Memoization)**을 사용하는 방법
- 큰 문제부터 시작해서, 필요한 작은 문제만 내려가며 해결하는 방식 (top-down)
- 재귀 함수를 이용해 큰 항을 구하기 위해 작은(이전) 항을 호출하는 방식

```js
function fib(n, memo = []) {
  if (n == 1 || n == 2) return 1; // 탈출 조건

  if (memo[n] != null) return memo[n]; // 이미 계산한 값 반환

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo); // 계산 후 저장
  return memo[n];
}

console.log(fib(10)); // 55
```
