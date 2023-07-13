# 다익스트라(Dijkstra) 알고리즘

> "한 지점"에서 다른 "모든 지점"까지의 최단 경로를 구하는 알고리즘
>
> > visited table
> >
> > > 우선순위 큐를 현재까지 발견한 정점 중에서 가장 거리가 작은 정점을 효율적으로 선택하기 위해 사용
> > >
> > > > 이웃 노드를 탐색하면서 더 짧은 거리(Weight)를 저장한다.
> > > > 그리디 알고리즘과 DP를 사용

## 구현 1

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

  console.log(distanceTable); // 초기화된 거리 테이블 출력

  // 우선순위 큐에 출발 노드와 그 가중치를 삽입
  queue.enqueue(start, 0);
  while (!queue.isEmpty()) {
    const { element: currentNode } = queue.dequeue();

    visitedTable[currentNode] = true;

    for (let neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const totalDistance = distanceTable[currentNode] + distance;
      /**
       * 만약 우선순위 큐에 이미 저장된 노드라면
       * 현재 저장된 거리보다 더 짧은 거리를 찾은 것이므로
       * 거리 테이블에 저장된 거리를 갱신한다.
       */
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

## 구현 2

```js
function dijkstra() {
  let pq = new PriorityQueue((a, b) => b[0] - a[0]); // 최소힙(Min Heap) // 시작 노드로 가기 위한 최단 거리는 0으로 우선순위 큐에 삽입 pq.enq([0, start]);
  distance[start] = 0;
  while (pq.size() != 0) {
    // 우선순위 큐가 비어있지 않다면
    // 가장 최단 거리가 짧은 노드에 대한 정보 꺼내기
    let [dist, now] = pq.deq();
    // 현재 노드가 이미 처리된 적이 있는 노드라면 무시 if (distance[now] < dist) continue;
    // 현재 노드와 연결된 다른 인접한 노드들을 확인 for (let i of graph[now]) {
    let cost = dist + i[1];
    // 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우 if (cost < distance[i[0]]) {
    distance[i[0]] = cost;
    pq.enq([cost, i[0]]);
  }
}

let n = 7; // 노드의 개수
let start = 1; // 시작 노드 번호
// 각 노드에 연결되어 있는 노드에 대한 정보를 담는 리스트를 만들기
let graph = [
  // 각 간선은 [노드, 비용] 형태
  [],
  [
    [2, 3],
    [3, 1],
    [4, 2],
  ], // 1번 노드의 간선들
  [
    [1, 3],
    [3, 1],
    [5, 1],
  ], // 2번 노드의 간선들
  [
    [1, 1],
    [2, 1],
    [4, 3],
    [6, 5],
  ], // 3번 노드의 간선들 [[1, 2], [3, 3], [7, 1]], // 4번 노드의 간선들
  [
    [2, 1],
    [6, 2],
  ], // 5번 노드의 간선들
  [
    [3, 5],
    [5, 2],
  ], // 6번 노드의 간선들
  [[4, 1]], // 7번 노드의 간선들
];

// 최단 거리 테이블을 모두 무한으로 초기화
let distance = new Array(n + 1).fill(Infinity);

// 다익스트라 알고리즘을 수행
dijkstra();

// 모든 노드로 가기 위한 최단 거리를 출력 for (let i = 1; i <= n; i++) {
// 도달할 수 없는 경우 무한(INFINITY)이라고 출력
if (distance[i] == Infinity) {
  console.log("INFINITY");
} // 도달할 수 있는 경우 거리를 출력
else {
  console.log(distance[i]);
}
```
