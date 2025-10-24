# algorithm 그래프순회 여행하는 외판원

```js
//재귀를 이용한 완전탐색.
function solve(pos, visited) {
  if (visited == (1 << N) - 1) return 0;

  let ret = min;
  for (let next = 0; next < N; next++) {
    if (!(visited & (1 << next)) && graph[pos][next] != 0) {
      let temp = graph[pos][next] + solve(next, visited | (1 << next));
      if (temp < ret) ret = temp;
    }
  }
  return ret;
}

const graph = [
  [0, 1, 2, 3],
  [1, 0, 4, 5],
  [2, 4, 0, 6],
  [3, 5, 6, 0],
];

const N = graph.length;

let min = 99999999;

for (let i = 0; i < N; i++) {
  let temp = solve(i, 1 << i);
  if (min > temp) min = temp;
}

console.log(min);
```
