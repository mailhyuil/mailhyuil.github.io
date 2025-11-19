# algorithm 그래프순회 DFS - Depth First Search

- 깊이 우선 탐색
- **Stack 자료구조** 또는 **재귀구조**를 사용
- 완전 탐색 알고리즘 (BFS는 레벨 전체를 메모리에 저장하기 때문에 완전 탐색에 알맞지 않음)
- 백트래킹이 필요할 시 사용
- 확인한 노드는 방문처리하고 방문하지 않은 노드를 탐색한다.
- O(V + E)

## 재귀 구현

```js
const graph = [
  [1], // 0
  [2, 3, 4], // 1
  [1], // 2
  [1, 5, 6], // 3
  [1, 7], // 4
  [3, 8], // 5
  [3], // 6
  [4], // 7
  [5], // 8
];

const visited = Array(graph.length).fill(false); // 방문 배열

function dfs(graph, start) {
  visited[start] = true; // 현재 노드를 방문 처리
  for (const i of graph[start]) {
    if (!visited[i]) {
      dfs(graph, i); // 방문하지 않은 노드를 start로 재귀호출
    }
  }
}

dfs(graph, 0);

console.log(visited);
```

## 백트래킹

```js
// n: 전체 수, k: 선택할 수
function findCombinationOfTarget(n, target) {
  const res = [];
  const path = [];
  function dfs(start, sum) {
    if (sum > target) return; // pruning
    if (sum === target) {
      res.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      dfs(i + 1, sum + i);
      path.pop(); // backtracking
    }
  }
  dfs(1, 0);
  return res;
}
console.log(findCombinationOfTarget(10, 10));

// 출력: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
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
