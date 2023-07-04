# 인접리스트 방식

> 인접 리스트 방식은 각 노드마다 인접한 노드의 연결 정보를 리스트(List)에 저장합니다.
>
> > 메모리 효율적
> >
> > > 노드 간의 연결 정보를 찾는데 걸리는 시간 느림
> > >
> > > > 노드의 개수가 많으면서 연결 정보가 적은 경우에 적합

## 배열 사용 시

> 정점의 추가/삭제가 거의 없는 경우

```js
class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = new Array(numVertices).fill([]);
  }

  addEdge(src, dest) {
    this.adjList[src].push(dest);
    this.adjList[dest].push(src);
  }

  printGraph() {
    for (let i = 0; i < this.numVertices; i++) {
      let vertex = i;
      let neighbors = this.adjList[i].join(" -> ");
      console.log(`Vertex ${vertex} is connected to: ${neighbors}`);
    }
  }
}

// Example usage:
const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 3);
graph.addEdge(3, 4);

graph.printGraph();
```

## 레코드 사용 시

> 정점의 추가/삭제가 빈번하게 발생하는 경우

```ts
class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    if (vertex in this.vertices) {
      this.vertices[vertex] = this.vertices[vertex];
    } else {
      this.vertices[vertex] = [];
    }
  }

  contains(vertex) {
    return !!this.vertices[vertex];
  }

  addEdge(fromVertex, toVertex) {
    if (!this.contains(fromVertex) || !this.contains(toVertex)) {
      return;
    }

    if (!this.hasEdge(fromVertex, toVertex)) {
      this.vertices[fromVertex].push(toVertex);
      this.vertices[toVertex].push(fromVertex);
    }
  }

  hasEdge(fromVertex, toVertex) {
    if (!this.contains(fromVertex)) {
      return false;
    }
    return !!this.vertices[fromVertex].includes(toVertex);
  }

  removeEdge(fromVertex, toVertex) {
    if (!this.contains(fromVertex) || !this.contains(toVertex)) {
      return;
    }
    if (this.hasEdge(fromVertex, toVertex)) {
      const index = this.vertices[toVertex].indexOf(fromVertex);
      this.vertices[toVertex].splice(index, 1);
    }
    if (this.hasEdge(fromVertex, toVertex)) {
      const index = this.vertices[fromVertex].indexOf(toVertex);
      this.vertices[fromVertex].splice(index, 1);
    }
  }

  removeVertex(vertex) {
    if (this.contains(vertex)) {
      while (this.vertices[vertex].length > 0) {
        this.removeEdge(this.vertices[vertex][0], vertex);
      }
      delete this.vertices[vertex];
    }
  }
}
```

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
