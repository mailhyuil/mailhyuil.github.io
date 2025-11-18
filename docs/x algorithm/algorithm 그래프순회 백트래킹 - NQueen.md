# algorithm 그래프순회 백트래킹 - NQueen

- N x N 의 체스판에 퀸을 서로 공격하는 않는 위치에 놓는 방법이 몇가지인지 계산하는 문제
- O(N!)

```js
// (row, col) 위치에 퀸을 놓을 수 있는지 확인
function possible(queens, row, col) {
  // 현재까지 놓았던 모든 퀸(queen)의 위치를 하나씩 확인
  for (let [r, c] of queens) {
    if (r == row || c == col) return false; // 행이나 열이 같다면 놓을 수 없음
    if (Math.abs(r - row) == Math.abs(c - col)) return false; // 대각선에 위치한 경우 놓을 수 없음 // abs(x₁ - x₂) 대각선 위치 구하기
  }
  return true;
}

function solveNQueen(n) {
  let queens = []; // 현재 체스판에 놓인 퀸(queen)의 위치 정보들
  let count = 0;

  function dfs(row) {
    if (row == n) count += 1; // 퀸(queen)을 N개 배치할 수 있는 경우 카운트
    for (let col = 0; col < n; col++) {
      // 현재 행(row)에 존재하는 열을 하나씩 확인하며
      if (!possible(queens, row, col)) continue; // 현재 위치에 놓을 수 없다면 무시
      queens.push([row, col]); // 현재 위치에 퀸을 놓기
      dfs(row + 1); // 재귀 함수 호출
      queens.pop(); // 현재 위치에서 퀸을 제거하기 (백트래킹)
    }
  }

  dfs(0);
  return count;
}

console.log(solveNQueen(4));
```
