# algorithm 그래프순회 BFS - Breadth First Search

- 너비 우선 탐색
- Queue 자료구조를 사용
- 최단거리를 구하는 알고리즘
- 재귀보다는 반복문으로 구현하는게 더 직관적이다.

## 반복문 구현

```js
function bfs(start, target, graph) {
  const visited = Array(graph.length).fill(false);
  const dist = Array(graph.length).fill(-1);
  const queue = [];
  let head = 0;

  visited[start] = true;
  dist[start] = 0;
  queue.push(start);

  while (head < queue.length) {
    const node = queue[head++];

    if (node === target) return dist[node]; // target 도달하면 바로 반환

    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        dist[next] = dist[node] + 1;
        queue.push(next);
      }
    }
  }

  return -1; // target 도달 불가
}

const graph = [
  [1], // 0
  [0, 2, 3], // 1
  [1, 4], // 2
  [1, 4], // 3
  [2, 3], // 4
];

console.log(bfs(0, 4, graph)); // 출력: 3
console.log(bfs(0, 3, graph)); // 출력: 2
console.log(bfs(0, 0, graph)); // 출력: 0
```
