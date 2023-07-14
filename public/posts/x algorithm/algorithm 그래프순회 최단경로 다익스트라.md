# 다익스트라(Dijkstra) 알고리즘

> "한 지점"에서 다른 "모든 지점"까지의 최단 경로를 구하는 알고리즘
>
> > visited table
> >
> > > 우선순위 큐를 현재까지 발견한 정점 중에서 가장 거리가 작은 정점을 효율적으로 선택하기 위해 사용
> > >
> > > > 이웃 노드를 탐색하면서 더 짧은 거리(Weight)를 저장한다.
> > > >
> > > > > 그리디 알고리즘과 DP를 사용

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
