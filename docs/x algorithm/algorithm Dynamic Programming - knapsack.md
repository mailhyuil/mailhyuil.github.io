# algorithm Dynamic Programming - knapsack

```js
/**
 W: 물건의 무게
 V: 물건의 값어치
 K: 최대 들 수 있는 무게
 N: 물건의 갯수

 -- 예시 --
 4 7 // N K
 6 13 // W V
 4 8 // W V
 3 6 // W V
 5 12 // W V
**/

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);

// 물건 정보 저장
const items = [];
for (let i = 1; i <= N; i++) {
  const [W, V] = input[i].split(" ").map(Number);
  items.push({ W, V });
}

// 1차원 DP: dp[w] = 무게 w에서 얻을 수 있는 최대 가치
const dp = Array(K + 1).fill(0);
// dp[K] = dp[무게] = 가치

for (let i = 0; i < N; i++) {
  const { W, V } = items[i];
  // dp[w]를 순회하며 dp[w - W] + V 중 무엇이 더 큰지 비교하며 업데이트
  for (let w = K; w >= W; w--) {
    dp[w] = Math.max(dp[w], dp[w - W] + V); // dp[w]가 dp[w-W] + V 보다 큰지?
  }
}

console.log(dp[K]);
```
