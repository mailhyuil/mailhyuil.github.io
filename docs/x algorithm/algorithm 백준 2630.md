# algorithm 백준 2630

- divide and conquer
- grid의 가장 왼쪽 위 좌표를 기준으로 생각하기

```js
const fs = require("fs");
const input = fs.readFileSync("input", "utf8").trim().split(/\s+/).map(Number);
let idx = 0;
const N = input[idx++];

// 입력된 0101010을 grid로 변환
const paper = Array.from({ length: N }, () => {
  const row = input.slice(idx, idx + N);
  idx += N;
  return row;
});

// count var
let countWhite = 0;
let countBlue = 0;

// 주어진 범위가 같은 색인지 판별 (완전 탐색)
function isSameColor(r, c, size) {
  const color = paper[r][c];
  for (let i = r; i < r + size; i++) {
    for (let j = c; j < c + size; j++) {
      if (paper[i][j] !== color) return false;
    }
  }
  return true;
}

function divide(r, c, size) {
  // 같은 색이고 0이면 흰색 카운트 1이면 파란색 카운트
  if (isSameColor(r, c, size)) {
    if (paper[r][c] === 0) countWhite++;
    else countBlue++;
    return;
  }

  // 반으로 줄여가며 재귀호출
  const half = size / 2;
  divide(r, c, half);
  divide(r, c + half, half);
  divide(r + half, c, half);
  divide(r + half, c + half, half);
}

divide(0, 0, N);

console.log(countWhite);
console.log(countBlue);
```
