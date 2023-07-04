# 인접리스트 방식

> 인접 리스트 방식은 각 노드마다 인접한 노드의 연결 정보를 리스트(List)에 저장합니다.
>
> > 메모리를 효율적
> >
> > > 그러나 노드 간의 연결 정보를 찾는데 걸리는 시간은 인접 행렬 방식보다 오래 걸릴 수 있습니다.
> > >
> > > > 따라서 인접 리스트 방식은 노드의 개수가 많으면서도 연결 정보가 적은 경우에 적합합니다.

## 배열 사용 시

```js
class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class Edge {
  constructor(nodeFrom, nodeTo, weight = 1) {
    this.nodeFrom = nodeFrom;
    this.nodeTo = nodeTo;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
    this.edges = new Set();
  }

  addNode(value) {
    if (!this.nodes.has(value)) {
      this.nodes.set(value, new Node(value));
    }
  }

  addEdge(from, to, weight) {
    const nodeFrom = this.nodes.get(from);
    const nodeTo = this.nodes.get(to);

    if (!nodeFrom || !nodeTo) {
      console.error("The nodes don't exist. Please add them before adding an edge.");
      return;
    }

    const edge = new Edge(nodeFrom, nodeTo, weight);
    nodeFrom.edges.push(edge);
    this.edges.add(edge);
  }
}

// 사용 예시
const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

console.log(graph);
```

## 레코드 사용 시

```ts
class Vertex {
  value: any;
}

class Graph {
  adjList: WeakMap<Vertex, Vertex[]>;
  constructor() {
    this.adjList = new WeakMap();
  }

  addVertex(vertex) {
    // 객체를 만드는 것
    this.adjList.set(vertex, []);
  }

  addEdge(vertex: Vertex, destinationVertex: Vertex) {
    // 객체끼리 참조하게 하는 것
    this.adjList.get(vertex).push(destinationVertex);
    this.adjList.get(destinationVertex).push(vertex);
  }
}
```
