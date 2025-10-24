# DFS (Depth First Search)

> '그래프 자료구조(리스트(2차원 배열))'에 대해서 '스택 자료구조'로 구현
>
> > 완전 탐색 알고리즘
> >
> > > 확인한 노드는 방문처리하고 방문하지 않은 노드를 탐색한다.

## 구현

```js
// DFS 메서드 정의
function dfs(graph, v, visited) {
  // 현재 노드를 방문 처리
  visited[v] = true;
  console.log(v);
  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

// 각 노드가 연결된 정보를 표현
const graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]]; // 간편한 구현을 위해서 0번 노드를 사용하지 않는다..
// 각 노드가 방문된 정보를 표현
const visited = Array(9).fill(false);
// 정의된 DFS 함수 호출
dfs(graph, 1, visited);
```
