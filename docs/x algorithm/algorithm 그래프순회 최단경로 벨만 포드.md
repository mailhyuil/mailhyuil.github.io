# algorithm 그래프순회 최단경로 벨만 포드

- 한 정점에서 다른 모든 정점 최단거리
- 음수 가중치 허용, 음수 사이클 검출 가능
- 음의 간선이 존재하는 경우에 사용하는 최단 경로 알고리즘
- 음의 간선이라 비용이 오히려 마이너스(이득)이 되는 경로를 말한다.
- 음수의 순환(음의 싸이클)을 감지할 수 있다.

## 음의 간선

- 간선의 비용이 음수
- 음의 싸이클이 포함되었을 때
- 음의 무한인 노드가 발생한다.

```js
function bellmanFord(edges, N, start) {
  const dist = Array(N).fill(Infinity);
  dist[start] = 0;

  for (let i = 0; i < N - 1; i++) {
    for (const [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[v] > dist[u] + w) {
        dist[v] = dist[u] + w;
      }
    }
  }

  // 음수 사이클 체크
  for (const [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[v] > dist[u] + w) {
      console.log("음수 사이클 존재");
      return null;
    }
  }

  return dist;
}
```
