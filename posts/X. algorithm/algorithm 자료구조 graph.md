# algorithm js graph

> 정점(vertex or node)와 간선(edge)
>
> > G=(V,E) // V는 vertex의 집합, E는 edge의 집합
> >
> > > 사이클
> > >
> > > > 네트워크 모델
> > > >
> > > > > 차수

## 구현

> 비용 === 가중치

### 인접 리스트 (adjacency list)

> linked list를 사용하는 방식

```
const graph = [
  '0'[[1,3],[2,7]], // 0번 노드에서 1번 노드로 가는 비용 3, 2번 노드로 가는 비용 7
  '1'[[0,3]], // 1번 노드에서 0번 노드로 가는 비용 3
  '2'[[0,7]], // 2번 노드에서 0번 노드로 가는 비용 7
]
```

#### 간단 예

```js
// 노드 객체
const node1 = { value: 'A' };
const node2 = { value: 'B' };
const node3 = { value: 'C' };
const node4 = { value: 'D' };

// 간선 배열
const edges = [
  { from: node1, to: node2 },
  { from: node1, to: node3 },
  { from: node2, to: node4 },
  { from: node3, to: node4 },
];

function findConnectedNodes(node, edges) {
  const connectedNodes = [];
  for (const edge of edges) {
    // edge.from이 node일 때
    if (edge.from === node) {
      // edge.to를 찾으면 됨
      connectedNodes.push(edge.to);
    }
  }
  return connectedNodes;
}

console.log(findConnectedNodes(node1, edges)); // [node2, node3]
```

```js
// undirected graph (무향 그래프)
// adjacency list (인접 리스트)
class GraphWithAdjacencyList {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    // TODO: 정점을 추가합니다.
    // 넘겨받은 인자(정점)은 키가 되며, 빈 배열을 값으로 할당합니다.
    // 이미 존재하는 정점이라면, 덮어 씌워지지 않아야 합니다.
    if (vertex in this.vertices) {
      this.vertices[vertex] = this.vertices[vertex];
    } else {
      this.vertices[vertex] = [];
    }
  }

  contains(vertex) {
    // 인자로 넘겨받은 정점의 존재여부를 반환합니다.
    return !!this.vertices[vertex];
  }

  addEdge(fromVertex, toVertex) {
    // TODO: 간선을 추가합니다.
    // - fromVertex의 인접 리스트에 toVertex를 추가하고
    // - toVertex의 인접 리스트에 fromVertex를 추가합니다.
    // 넘겨받은 2개의 정점 모두 존재하는 정점이어야 합니다.

    if (!this.contains(fromVertex) || !this.contains(toVertex)) {
      return;
    }

    if (!this.hasEdge(fromVertex, toVertex)) {
      // TODO
      this.vertices[fromVertex].push(toVertex);
      this.vertices[toVertex].push(fromVertex);
    }
  }

  hasEdge(fromVertex, toVertex) {
    // 만약 정점(fromVertex)이 존재하지 않는다면
    if (!this.contains(fromVertex)) {
      // false를 반환합니다
      return false;
    }
    // 존재한다면 해당 정점의 리스트에 toVertex가 포함되어있는지 반환합니다
    return !!this.vertices[fromVertex].includes(toVertex);
  }

  removeEdge(fromVertex, toVertex) {
    // TODO: 간선을 삭제합니다.
    // 인자로 넘겨받은 두 정점이 모두 존재한다면
    // - fromVertex의 인접 리스트에 있는 toVertex를 삭제하고
    // - toVertex의 인접 리스트에 있는 fromVertex를 삭제합니다.

    if (!this.contains(fromVertex) || !this.contains(toVertex)) {
      return;
    }
    // 첫 번째 정점의 인접 리스트에 두번째 정점이 있을 경우
    if (this.hasEdge(fromVertex, toVertex)) {
      const index = this.vertices[toVertex].indexOf(fromVertex);
      this.vertices[toVertex].splice(index, 1);
    }
    // TODO:  두번째 정점의 인접 리스트에 첫번째 정점이 있을 경우
    if (this.hasEdge(fromVertex, toVertex)) {
      const index = this.vertices[fromVertex].indexOf(toVertex);
      this.vertices[fromVertex].splice(index, 1);
    }
  }

  removeVertex(vertex) {
    // TODO: 정점을 삭제합니다.
    // 인자로 넘겨받은 정점(A)이 존재한다면
    // - 이 정점(A)을 삭제함은 물론,
    // - 다른 모든 정점들의 리스트를 순회하며 넘겨받은 정점(A)과 이어져 있는 간선을 제거합니다
    if (this.contains(vertex)) {
      while (this.vertices[vertex].length > 0) {
        this.removeEdge(this.vertices[vertex][0], vertex);
      }
      // 최종적으로 해당 정점을 삭제합니다
      delete this.vertices[vertex];
    }
  }
}
```

### 인접 행렬 (adjacency matrix)

> 2차원 배열을 사용하는 방식

```js
const graph = [
   'a''b''c''d'
'a'[0, 1, 1, 0],
'b'[1, 0, 1, 0],
'c'[1, 1, 0, 1],
'd'[0, 0, 1, 0],
];
// '왼쪽 알파벳'에서 '위쪽 알파벳'로 가는 비용을 표현
```

```js
// directed graph (방향 그래프)
// unweighted (비가중치)
// adjacency matrix (인접 행렬)
// 이해를 돕기 위해 기존 배열의 인덱스를 정점으로 사용합니다 (0, 1, 2, ... --> 정점)

class GraphWithAdjacencyMatrix {
  constructor() {
    this.matrix = [];
  }

  addVertex() {
    //버텍스를 추가합니다.
    const currentLength = this.matrix.length;
    for (let i = 0; i < currentLength; i++) {
      this.matrix[i].push(0);
    }
    this.matrix.push(new Array(currentLength + 1).fill(0));
  }

  contains(vertex) {
    //TODO: 버텍스가 있는지 확인합니다.
    return vertex < this.matrix.length;
  }

  addEdge(from, to) {
    const currentLength = this.matrix.length;
    if (from === undefined || to === undefined) {
      console.log('2개의 인자가 있어야 합니다.');
      return;
    }
    //TODO: 간선을 추가할 수 없는 상황에서는 추가하지 말아야 합니다.
    if (from + 1 > currentLength || to + 1 > currentLength || from < 0 || to < 0) {
      console.log('범위가 매트릭스 밖에 있습니다.');
      return;
    }
    //TODO: 간선을 추가해야 합니다.
    this.matrix[from][to] = 1;
  }

  hasEdge(from, to) {
    //TODO: 두 버텍스 사이에 간선이 있는지 확인합니다.
    return this.matrix[from][to] === 1;
  }

  removeEdge(from, to) {
    const currentLength = this.matrix.length;
    if (from === undefined || to === undefined) {
      console.log('2개의 인자가 있어야 합니다.');
      return;
    }
    //TODO: 간선을 지울 수 없는 상황에서는 지우지 말아야 합니다.
    if (from + 1 > currentLength || to + 1 > currentLength || from < 0 || to < 0) {
      return;
    }
    //TODO: 간선을 지워야 합니다.
    this.matrix[from][to] = 0;
  }
}
```
