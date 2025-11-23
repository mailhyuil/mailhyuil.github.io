# algorithm base 비트마스크 (bitmask)

- bit는 뒤에서부터 0번째 비트입니다.
- `OR: |, AND: &, XOR: ^, NOT: ~, SHIFT: <<, >>`

## 기본연산

```js
let mask = 0b0000; // 0000

// 1) n번째 비트 켜기
mask |= 1 << n; // 0100

// 2) n번째 비트 끄기
mask &= ~(1 << n); // 0000

// 3) n번째 비트 토글
mask ^= 1 << n; // 0010

// 4) n개의 전체 비트를 1로 변경
mask = (1 << n) - 1; // 1111

// 5) n개의 전체 비트를 0으로 변경
mask = ~(1 << n) - 1; // 0000

// 6) n번째 비트만 켜진 비트로 덮어쓰기 (나머지는 0)
mask = 1 << n; // 1000

// 7) 확인(check) - n번째 비트가 켜져 있는지
(mask & (1 << n)) !== 0; // false
```

## boolean과 비교

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
