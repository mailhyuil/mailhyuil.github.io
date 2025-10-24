# algorithm 휴리스틱

> 어림짐작하는 알고리즘

## Routing problem

> 여러 노드를 방문하는 경로에 대해 가장 최소로 하는 최적의 경로를 찾는 문제

```js
// 도시들 간의 거리 정보
const distances = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0],
];

// 휴리스틱 함수 (도시들 간의 거리로 예측)
function heuristic(cityA, cityB) {
  return distances[cityA][cityB];
}

// 여행 경로 계산
function calculateTravelPath(startCity, citiesToVisit) {
  const path = [startCity]; // 경로 시작 도시
  let currentCity = startCity; // 현재 도시

  while (citiesToVisit.length > 0) {
    let nextCity;
    let minDistance = Infinity;

    // 방문할 도시들을 순회하며 최소 거리 도시 선택
    for (let i = 0; i < citiesToVisit.length; i++) {
      const distance = heuristic(currentCity, citiesToVisit[i]);

      if (distance < minDistance) {
        minDistance = distance;
        nextCity = citiesToVisit[i];
      }
    }

    // 선택된 도시를 경로에 추가하고 방문할 도시 리스트에서 제거
    path.push(nextCity);
    citiesToVisit.splice(citiesToVisit.indexOf(nextCity), 1);
    currentCity = nextCity; // 다음 도시로 이동
  }

  return path;
}

// 예시 사용
const startCity = 0;
const citiesToVisit = [1, 2, 3];

const travelPath = calculateTravelPath(startCity, citiesToVisit);
console.log(travelPath);
```
