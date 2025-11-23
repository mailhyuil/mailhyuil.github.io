# algorithm 그래프순회 최단경로 플로이드 워셜

- 모든 정점 쌍 최단거리
- 음수 가중치 가능, 단 음수 사이클은 주의
- "모든 지점"에서 다른 "모든 지점"까지의 최단 경로를 구하는 알고리즘

```js
function floydWarshall(graph) {
  const N = graph.length;
  const dist = Array.from({ length: N }, (_, i) => Array.from({ length: N }, (_, j) => graph[i][j] ?? Infinity));

  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}
```
