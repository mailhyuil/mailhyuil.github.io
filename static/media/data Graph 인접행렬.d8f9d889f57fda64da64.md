# 인접행렬 방식

> 인접 행렬 방식은 이차원 배열로 각 노드 간의 연결 여부를 저장합니다.
>
> > > 노드 간 연결 정보를 찾는데 걸리는 시간이 인접 리스트 방식보다 빠릅니다.
> > >
> > > > 그러나 노드의 개수가 많아질수록 사용하는 메모리의 양이 증가하므로,
> > > >
> > > > > 연결 정보가 적은 경우에는 인접 리스트 방식을 선호하는 것이 좋습니다.

## 배열 사용 시

```ts
class Graph {
  adjMatrix: number[][];

  constructor() {
    this.adjMatrix = [];
  }

  addVertex() {
    const numVertices = this.adjMatrix.length;
    this.adjMatrix.push(Array(numVertices).fill(0));

    for (let i = 0; i < numVertices; i++) {
      this.adjMatrix[i].push(0);
    }
  }

  addEdge(vertex, destinationVertex) {
    if (vertex >= 0 && vertex < this.adjMatrix.length && destinationVertex >= 0 && destinationVertex < this.adjMatrix.length) {
      this.adjMatrix[vertex][destinationVertex] = 1;
      this.adjMatrix[destinationVertex][vertex] = 1;
    }
  }
}
```

## 레코드 사용 시

```js
class Graph {
  constructor() {
    this.adjMatrix = new Map();
  }

  addVertex(vertex) {
    if (!this.adjMatrix.has(vertex)) {
      this.adjMatrix.set(vertex, new Map());
    }
  }

  addEdge(from, to, weight = 1) {
    if (this.adjMatrix.has(from) && this.adjMatrix.has(to)) {
      this.adjMatrix.get(from).set(to, weight);
    } else {
      console.error("The vertices don't exist. Please add them before adding an edge.");
    }
  }

  displayMatrix() {
    console.log("Adjacency Matrix:");
    for (let [vertex, edges] of this.adjMatrix) {
      const row = [];
      for (let [otherVertex] of this.adjMatrix) {
        if (edges.has(otherVertex)) {
          row.push(edges.get(otherVertex));
        } else {
          row.push(0);
        }
      }
      console.log(row.join(" "));
    }
  }
}

// 사용 예시
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);

graph.addEdge(1, 2);
graph.addEdge(2, 3);
```
