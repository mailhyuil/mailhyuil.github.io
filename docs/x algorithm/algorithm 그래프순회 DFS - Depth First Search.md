# algorithm 그래프순회 DFS - Depth First Search

- 깊이 우선 탐색
- Stack 자료구조를 사용
- 완전 탐색 알고리즘 (BFS는 레벨 전체를 메모리에 저장하기 때문에 완전 탐색에 알맞지 않음)
- 백트래킹이 필요할 시 사용
- 확인한 노드는 방문처리하고 방문하지 않은 노드를 탐색한다.

## 재귀 구현

```js
function traverse(graph, start) {
  // 각 노드가 방문된 정보를 표현
  const visited = Array(graph.length).fill(false);
  // DFS 메서드 정의
  function dfs(graph, start) {
    // 현재 노드를 방문 처리
    visited[start] = true;
    // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for (const i of graph[start]) {
      if (!visited[i]) {
        dfs(graph, i);
      }
    }
  }

  dfs(graph, start);
  return visited;
}

// 각 노드가 연결된 정보를 표현
const graph = [
  [], // 간편한 구현을 위해서 0번 노드를 사용하지 않는다.. (1-based)
  [2, 3, 4], // 1
  [1], // 2
  [1, 5, 6], // 3
  [1, 7], // 4
  [3, 8], // 5
  [3], // 6
  [4], // 7
  [5], // 8
];

// 정의된 DFS 함수 호출
console.log(traverse(graph, 4));
```

## 반복문 구현

```js
function traverse(graph, start) {
  const visited = Array(graph.length).fill(false);
  const stack = [start];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited[node]) {
      visited[node] = true;
      for (let i = graph[node].length - 1; i >= 0; i--) {
        const next = graph[node][i];
        if (!visited[next]) {
          stack.push(next); // 연결된 노드를 스택에 추가
        }
      }
    }
  }

  return visited;
}

// 테스트
const graph = [
  [], // 0
  [2, 3, 4], // 1
  [1], // 2
  [1, 5, 6], // 3
  [1, 7], // 4
  [3, 8], // 5
  [3], // 6
  [4], // 7
  [5], // 8
];

console.log(traverse(graph, 4));
```
