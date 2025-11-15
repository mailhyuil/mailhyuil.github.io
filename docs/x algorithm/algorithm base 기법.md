# algorithm base 기법

## 투 포인터

**정렬 후** 두개의 포인터를 사용하여 문제를 해결하는 기법

## 슬라이딩 윈도우

**정렬 후** window size를 유지하며 window를 움직이며 문제를 해결

## 재귀

## 분할 정복

## 이진 탐색

## 그리디

## 동적 계획법

## 백트래킹

잘못된 길로 가면 되돌아오는 기법

## 투 트래킹

두개의 포인터를 하나는 빠르게 하나는 느리게 움직이면서 두개의 포인터가 만나는지를 이용하여 문제를 해결

```js
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function hasCycle(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next; // 1칸
    fast = fast.next.next; // 2칸

    if (slow === fast) return true; // 만난다면 사이클 존재
  }

  return false; // 끝까지 안 만나면 사이클 없음
}

// 테스트
let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
a.next = b;
b.next = c;
c.next = b; // 사이클

console.log(hasCycle(a)); // true
```

## 비트마스킹

## 반복문 기반 시뮬레이션

```js
function simulateMoves(N, commands) {
  // 상 우 하 좌
  const dir = {
    U: [-1, 0],
    R: [0, 1],
    D: [1, 0],
    L: [0, -1],
  };

  let x = 0; // 현재 행
  let y = 0; // 현재 열

  for (const c of commands) {
    const [dx, dy] = dir[c];
    const nx = x + dx;
    const ny = y + dy;

    // 격자 범위 체크
    if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
      continue; // 나가면 무시
    }

    // 위치 업데이트
    x = nx;
    y = ny;
  }

  return [x, y];
}

// 테스트
console.log(simulateMoves(5, ["R", "R", "D", "D", "L", "U"]));
// 예: [1, 1]
```

## 메모이제이션

## 그래프 탐색

## 해시 기반 처리

## 유니온파인드
