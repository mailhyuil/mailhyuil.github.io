# algorithm base boolean vs bitmask

```js
// 값
true = 1
false = 0
// 선언
let visited = [false, true, false, true]; // 0번 미방문, 1번 방문, 2번 미방문, 3번 방문
let mask = 0b1010; // 0번 미방문, 1번 방문, 2번 미방문, 3번 방문 (비트마스크는 가장 오른쪽이 0번째 비트)
// 접근
visited[i]
1 << i
// 조회
if(visited[i])
if(mask & (1 << i))
// set true
visited[i] = true;
mask |= 1 << i;
// set false
visited[i] = false;
mask &= ~(1 << i);
// 토글
visited[i] = !visited[i];
mask ^= 1 << i;
```
