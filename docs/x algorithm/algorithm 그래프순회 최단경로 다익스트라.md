# algorithm 그래프순회 최단경로 다익스트라

- "한 지점"에서 다른 "모든 지점"까지의 최단 경로를 구하는 알고리즘
- visited table을 사용
- 우선순위 큐를 현재까지 발견한 정점 중에서 가장 거리가 작은 정점을 효율적으로 선택하기 위해 사용
- 이웃 노드를 탐색하면서 더 짧은 거리(Weight)를 저장한다. (가중치 그래프)
- 그리디 알고리즘과 DP를 사용

## 가중치 그래프 작성

```js
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}
```

## 가중치 그래프로 구현

```js
// WeightedGraph 클래스
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

// PriorityQueue (간단 구현)
class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  enqueue(element, priority) {
    this.elements.push({ element, priority });
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.elements.shift();
  }
}

// 다익스트라 함수
function dijkstra(graph, start) {
  const distances = {};
  const visited = {};
  const pq = new PriorityQueue();

  // 초기화
  for (const vertex in graph.adjacencyList) {
    distances[vertex] = Infinity;
    visited[vertex] = false;
  }
  distances[start] = 0;
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const { element: current } = pq.dequeue();
    if (visited[current]) continue;
    visited[current] = true;

    for (const neighbor of graph.adjacencyList[current]) {
      const { node, weight } = neighbor;
      const newDist = distances[current] + weight;
      if (!visited[node] && newDist < distances[node]) {
        distances[node] = newDist;
        pq.enqueue(node, newDist);
      }
    }
  }

  return distances;
}

// 그래프 생성 및 간선 추가
const g = new WeightedGraph();
["A", "B", "C", "D", "E"].forEach(v => g.addVertex(v));
g.addEdge("A", "B", 5);
g.addEdge("A", "C", 2);
g.addEdge("B", "C", 1);
g.addEdge("B", "D", 3);
g.addEdge("C", "D", 2);
g.addEdge("D", "E", 4);

// 다익스트라 실행
const startNode = "A";
const distances = dijkstra(g, startNode);
console.log(distances);
```

## 2D Grid로 구현

```js
class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  enqueue(element, priority) {
    this.elements.push({ element, priority });
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.elements.shift();
  }
}

function dijkstraGrid(grid, start) {
  const numRows = grid.length;
  const numCols = grid[0].length;

  const distance = Array.from({ length: numRows }, () => Array(numCols).fill(Infinity));
  const visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));

  const queue = new PriorityQueue();
  const [sr, sc] = start;
  distance[sr][sc] = grid[sr][sc];
  queue.enqueue([sr, sc], distance[sr][sc]);

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]; // 상하좌우

  while (!queue.isEmpty()) {
    const {
      element: [r, c],
    } = queue.dequeue();
    if (visited[r][c]) continue;
    visited[r][c] = true;

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 0 || nr >= numRows || nc < 0 || nc >= numCols) continue;

      const newDist = distance[r][c] + grid[nr][nc];
      if (!visited[nr][nc] && newDist < distance[nr][nc]) {
        distance[nr][nc] = newDist;
        queue.enqueue([nr, nc], newDist);
      }
    }
  }

  return distance;
}

// 시작점 [0,0]
const start = [0, 0];
const distances = dijkstraGrid(grid, start);
console.log(distances);
```

## Node-key 그래프로 구현

```js
function dijkstra(graph, start) {
  const distanceTable = {}; // 최단 거리를 저장할 테이블
  const visitedTable = {}; // 방문 테이블
  const queue = new PriorityQueue(); // 가장 짧은 경로를 찾기 위해서 사용할 우선순위 큐

  // 출발 노드를 제외한 모든 노드까지의 거리를 Infinity로 초기화
  for (let node in graph) {
    distanceTable[node] = Infinity;
  }

  // 출발 노드까지의 거리는 0으로 초기화
  distanceTable[start] = 0;

  // 우선순위 큐에 출발 노드와 그 가중치를 삽입
  queue.enqueue(start, 0);
  while (!queue.isEmpty()) {
    const { element: currentNode } = queue.dequeue();

    visitedTable[currentNode] = true;

    for (let neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const totalDistance = distanceTable[currentNode] + distance;

      if (!visitedTable[neighbor] && totalDistance < distanceTable[neighbor]) {
        distanceTable[neighbor] = totalDistance;
        queue.enqueue(neighbor, totalDistance);
      }
    }
  }

  return distanceTable;
}

// 우선순위 큐 구현을 위한 클래스
class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  enqueue(element, priority) {
    this.elements.push({ element, priority });
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.elements.shift();
  }
}

// 그래프 예시
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 2 },
  D: { B: 3, C: 2, E: 4 },
  E: { D: 4 },
};

const startNode = "A";
const distances = dijkstra(graph, startNode);

console.log(distances);
```
