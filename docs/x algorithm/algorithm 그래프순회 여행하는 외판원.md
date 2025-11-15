# algorithm 그래프순회 여행하는 외판원

```js
const N = 4;
const graph = [
  [0, 1, 2, 3],
  [1, 0, 4, 5],
  [2, 4, 0, 6],
  [3, 5, 6, 0],
];

const dp: number[][] = Array.from({ length: N }, () => Array(1 << N).fill(-1));
/**
 * [-1, -1, -1, -1]
 * [-1, -1, -1, -1]
 * [-1, -1, -1, -1]
 * [-1, -1, -1, -1]
 **/
function tsp(pos: number, visited: number): number {
  if (visited === (1 << N) - 1) return 0; // 모든 도시 방문 완료

  if (dp[pos][visited] !== -1) return dp[pos][visited];

  let ret = Infinity;
  for (let next = 0; next < N; next++) {
    if (!(visited & (1 << next))) {
      ret = Math.min(ret, graph[pos][next] + tsp(next, visited | (1 << next)));
    }
  }
  return (dp[pos][visited] = ret);
}

let answer = Infinity;
for (let i = 0; i < N; i++) {
  answer = Math.min(answer, tsp(i, 1 << i));
}

console.log(answer); // 최소 거리 출력
```
