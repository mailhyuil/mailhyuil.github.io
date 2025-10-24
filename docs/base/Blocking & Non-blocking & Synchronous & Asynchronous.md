# Blocking & Non-blocking & Synchronous & Asynchronous

> 순차적으로 작업이 처리되어야 한다면 동기 혹은 논블로킹 방식을 사용해야한다.
>
> > blocking/non-blocking과 sync/async의 차이점은 관심사
> >
> > > 과거에는 process가 io를 처리하는 동안 cpu는 process를 block했지만, 지금은 main thread가 아닌 다른 thread가 io를 처리하고 main thread는 다른 작업을 수행한다.

```js
class Caller {
  callSyncTaskOfReceiver() {
    // caller와 receiver는 sync된다.
    receiver.syncTask(); // caller가 syncTask request를 cpu에 보내면 cpu는 syncTask를 실행, caller를 block
    anotherTask();
  }
  callAsyncTaskOfReceiver() {
    // caller와 receiver는 async된다.
    receiver.asyncTask(); // caller가 asyncTask request를 cpu에 보내면 cpu는 asyncTask를 실행, caller를 block하지 않고 다른 작업을 수행
    anotherTask();
  }
}
```

## Blocking/NonBlocking

> 호출된 함수가 제어권을 갖는냐 마느냐

## Synchronous/Asynchronous

> 함수의 작업 완료 여부를 누가 신경쓰느냐

```sh
Blocking 호출된 함수를 기다림 (제어권이 호출된 함수에게 넘어감)
Non-blocking 호출된 함수를 기다리지 않음 (제어권이 호출한 함수에게 남아있음)
Synchronous 호출된 함수의 반환값을 내가 받음
Asynchronous 호출된 함수의 반환값 받기를 다른 사람에게 위임 (callback)

# Blocking
A 함수가 B 함수를 호출 할 때, B 함수가 자신의 작업이 종료되기 전까지 A 함수에게 제어권을 돌려주지 않는 것

# Non-Blocking
A 함수가 B 함수를 호출 할 때, B 함수가 제어권을 바로 A 함수에게 넘겨주면서, A 함수가 다른 일을 할 수 있도록 하는 것.

# Synchronous
A 함수가 B 함수를 호출 할 때, B 함수의 결과를 A 함수가 처리하는 것.

# Asynchronous
A 함수가 B 함수를 호출 할 때, B 함수의 결과를 B 함수가 처리하는 것. (callback)
```
