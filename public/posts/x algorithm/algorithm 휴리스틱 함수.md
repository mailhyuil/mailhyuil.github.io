# 휴리스틱 함수

> 주어진 상황에서 어떤 선택을 하는 것이 최적의 해에 가까운지를 평가하는 데 사용됩니다.

```js
function heuristic(state, goal) {
  let distance = 0;
  for (let i = 0; i < state.length; i++) {
    const current = state[i];
    if (current !== goal[i]) {
      // 좌표 평면에서의 거리 계산
      const currentRow = Math.floor(current / 3);
      const currentCol = current % 3;
      const goalRow = Math.floor(goal[i] / 3);
      const goalCol = goal[i] % 3;
      distance += Math.abs(currentRow - goalRow) + Math.abs(currentCol - goalCol);
    }
  }
  return distance;
}
```
