# data queue - js array

- js에서 queue api를 제공하지 않는다.
- js의 shift를 사용하면 시간복잡도가 O(n)으로 느리다
- headIndex로 접근하여 O(1)로 구현 가능

```js
const queue = [];
let head = 0;
// 추가
queue.push(value);
// 제거
queue[head++];
// 확인
queue[head];
// 길이
queue.length - head; // O(1)
// 비어있는지
head >= queue.length; // O(1)
// 모두 제거
queue.length = head;
// 메모리 누수 방지용 초기화
queue.slice(head);
head = 0;
```
