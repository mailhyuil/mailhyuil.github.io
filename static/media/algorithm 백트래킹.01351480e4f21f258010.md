# 백트래킹

> 완전 탐색 알고리즘
>
> > 트리 구조 사용
> >
> > > 가능한 노드에 대해서만 재귀적으로 함수를 호출
> > >
> > > > 완전탐색의 경우의 수를 줄일 수 있다.

## N-Queen 문제

> N x N 의 체스판에 N개의 퀸을 서로 공격하는 않는 위치에 놓는 문제

```js
let n = 8; // 전체 맵(map)의 크기
let queens = []; // 현재 체스판에 놓인 퀸(queen)의 위치 정보들
function possible(x, y) {
  // (x, y) 위치에 퀸을 놓을 수 있는지 확인
  for (let [a, b] of queens) {
    // 현재까지 놓았던 모든 퀸(queen)의 위치를 하나씩 확인하며
    if (a == x || b == y) return false; // 행이나 열이 같다면 놓을 수 없음
    if (Math.abs(a - x) == Math.abs(b - y)) return false; // 대각선에 위치한 경우 놓을 수 없음 // abs(x₁ - x₂) 대각선 위치 구하기
  }
  return true;
}
let cnt = 0;
function dfs(row) {
  if (row == n) cnt += 1; // 퀸(queen)을 N개 배치할 수 있는 경우 카운트
  for (let i = 0; i < n; i++) {
    // 현재 행(row)에 존재하는 열을 하나씩 확인하며
    if (!possible(row, i)) continue; // 현재 위치에 놓을 수 없다면 무시
    queens.push([row, i]); // 현재 위치에 퀸을 놓기
    dfs(row + 1); // 재귀 함수 호출
    queens.pop(); // 현재 위치에서 퀸을 제거하기
  }
}
dfs(0);
console.log(cnt);
```
