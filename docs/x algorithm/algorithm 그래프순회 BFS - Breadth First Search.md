# algorithm 그래프순회 BFS - Breadth First Search

- 너비 우선 탐색
- 그래프 완전 탐색 알고리즘
- '그래프 자료구조(리스트(2차원 배열))'에 대해서 '큐 자료구조'로 구현

## 구현

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
    console.log("visit:", node);

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
