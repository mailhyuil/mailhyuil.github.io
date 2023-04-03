# event loop

> 이벤트 루프의 각 반복을 "틱(tick)"이라고 합니다.

## 이벤트 루프

1. 사용자 입력, 네트워크 활동 또는 타이머와 같은 이벤트로 인해 트리거된 대기 중인 I/O 콜백을 처리합니다.

2. setImmediate()를 사용하여 추가된 즉시 콜백을 실행합니다.

3. setTimeout() 또는 setInterval()을 사용하여 만들어진 만료된 타이머 콜백을 실행합니다.

4. Promise.then() 또는 async/await을 사용하여 만들어진 대기 중인 마이크로태스크를 확인합니다.

5. 필요한 경우 UI 변경을 렌더링합니다.

6. 새로운 틱을 시작하여 프로세스를 반복합니다.

## task queue 순서

1. process.nextTick queue
   > 현재 틱에서 바로 실행 됨
2. promises microtask queue
   > macrotask queue의 작업 전에 전부 실행됨
3. macrotask queue (setTimeout / setImmediate)
   > 마지막에 실행 됨

## nextTick

> 가장 먼저 실행된다
>
> > 현재 틱내에서 바로 실행됨

## setImmediate

> setImmediate() 함수는 현재 이벤트 루프의 다음 tick에서 실행되는 함수를 등록하는 데 사용됩니다. 이를 사용하면 이벤트 루프의 다음 tick에서 리스너 함수가 실행되므로, 다른 이벤트 핸들링과 병행하여 처리할 수 있습니다.
>
> > 다음 틱에서 실행됨

```
myEmitter.on('event', function(a, b) {
  setImmediate(() => {
    console.log('첫 번째 리스너:', a, b);
  });
});
myEmitter.on('event', function(a, b) {
  setImmediate(() => {
    console.log('두 번째 리스너:', a, b);
  });
});
```
