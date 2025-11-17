# algorithm 시뮬레이션

## 방향처리 및 이동

```js
// 방향
let dir = 0; // 0: 상, 1: 우, 2: 하, 3: 좌
// 이동 방향 (상, 우, 하, 좌 순서)
const dx = [-1, 0, 1, 0]; // 행 이동: x축 -1이 위로 1이 아래로
const dy = [0, 1, 0, -1]; // 열 이동: y축 -1이 왼쪽으로 1이 오른쪽으로
// 이동
const nr = r + dx[dir]; // next row
const nc = c + dy[dir]; // next column

// 왼쪽 회전
const left = (dir + 3) % 4;
// 왼쪽 이동
const leftR = r + dx[left];
const leftC = c + dy[left];

// 오른쪽 회전
const right = (dir + 1) % 4;
// 오른쪽 이동
const rightR = r + dx[right];
const rightC = c + dy[right];

// 뒤로 회전
const back = (dir + 2) % 4;
// 뒤로 이동
const backR = r + dx[back];
const backC = c + dy[back];
```

## 경계 확인

```js
if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
```

## 벽 확인

```js
if (grid[nr][nc] === 1) continue; // 1이 벽일 경우
```

## 방문처리

```js
const visited = Array.from({ length: n }, () => Array(m).fill(false));
visited[r][c] = true;
```

## 반복

```js
while (true) {
  // 종료조건
}
```

## 예시

```ts
type Grid = number[][]; // 0 = 빈칸, 1 = 벽

interface RobotState {
  r: number; // row
  c: number; // column
  dir: number; // 0=up,1=right,2=down,3=left
}

function simulateRobot(grid: Grid, start: RobotState, cmds: string): RobotState {
  const n = grid.length; // row
  const m = grid[0].length; // column
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  let { r, c, dir } = start;

  for (const cmd of cmds) {
    if (cmd === "L") {
      // 왼쪽으로 90도 회전
      dir = (dir + 3) % 4;
    } else if (cmd === "R") {
      // 오른쪽으로 90도 회전
      dir = (dir + 1) % 4;
    } else if (cmd === "F") {
      // 앞으로 한 칸 이동
      const nr = r + dr[dir]; // next row
      const nc = c + dc[dir]; // next column
      if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue; // 경계 확인
      if (grid[nr][nc] === 1) continue; // 벽 확인
      r = nr; // 이동
      c = nc; // 이동
    }
  }

  return { r, c, dir };
}

// 사용 예시
const grid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
const start = { r: 1, c: 0, dir: 1 }; // (1,0)에서 오른쪽
console.log(simulateRobot(grid, start, "FFRFF")); // 최종 위치, 방향
```
