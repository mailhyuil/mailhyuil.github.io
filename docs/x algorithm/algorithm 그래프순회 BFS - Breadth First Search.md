# algorithm 그래프순회 BFS - Breadth First Search

- 너비 우선 탐색
- Queue 자료구조를 사용
- 최단거리를 구하는 알고리즘
- 재귀보다는 반복문으로 구현하는게 더 직관적이다.

## 반복문 구현

```js
function bfs(start, graph) {
  const visited = Array(graph.length).fill(false);
  const queue = [];
  let head = 0;

  // 초기값
  visited[start] = true;
  queue.push(start);

  while (head < queue.length) {
    const node = queue[head++];
    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
}

const graph = [
  [1], // 0
  [0, 2, 3], // 1
  [1, 4], // 2
  [1, 4], // 3
  [2, 3], // 4
];

bfs(0, graph);
```
