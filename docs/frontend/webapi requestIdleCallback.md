# webapi requestIdleCallback

> 브라우저가 Idle 상태일 때 실행할 콜백을 등록하는 API
>
> > cancelIdleCallback()으로 등록한 콜백을 취소할 수 있음

```js
const idleCallback = deadline => {
  // deadline은 남은 시간 (ms)
  while (deadline.timeRemaining() > 0 || deadline.didTimeout) {
    if (tasks.length) {
      const task = tasks.shift(); // 작업을 꺼내옴
      task(); // 작업 실행
    } else {
      break; // 더 이상 할 일이 없다면 종료
    }
  }
  requestIdleCallback(idleCallback, { timeout: 1000 });
};

requestIdleCallback(
  idleCallback,
  { timeout: 1000 }, // 1초 후에 타임아웃
);

const cancelIdleCallback =
  window.cancelIdleCallback ||
  function (id) {
    clearTimeout(id);
  };
```
