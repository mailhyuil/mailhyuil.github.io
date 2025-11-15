# algorithm 시뮬레이션

```ts
type Grid = number[][]; // 0 = 빈칸, 1 = 벽

interface RobotState {
  r: number; // row
  c: number; // column
  dir: number; // 0=up,1=right,2=down,3=left
}

function simulateRobot(grid: Grid, start: RobotState, cmds: string): RobotState {
  const n = grid.length;
  const m = grid[0].length;
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
      const nr = r + dr[dir];
      const nc = c + dc[dir];
      if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
      if (grid[nr][nc] === 1) continue;
      r = nr;
      c = nc;
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
console.log(simulateRobot(grid, start, "FFRFF")); // 최종 위치/방향
```
