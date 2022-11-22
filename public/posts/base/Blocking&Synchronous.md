# Blocking I/O, Synchronous Non-Blocking I/O, Asyncronous Non-Blocking I/O
> 순차적으로 작업이 처리되어야 한다면 동기 혹은 논블로킹 방식을 사용해야한다.
>> blocking/non-blocking과 sync/async의 차이점은 관심사

- 기다림 Blocking / 기다리지 않음 Non-blocking
- 내가 함 Synchronous / 다른 사람 시킴 Asynchronous

## Blocking/NonBlocking
> 호출된 함수가 제어권을 갖는냐 마느냐
### Blocking
> A 함수가 B 함수를 호출 할 때, B 함수가 자신의 작업이 종료되기 전까지 A 함수에게 제어권을 돌려주지 않는 것
### Non-Blocking
> A 함수가 B 함수를 호출 할 때, B 함수가 제어권을 바로 A 함수에게 넘겨주면서, A 함수가 다른 일을 할 수 있도록 하는 것.

## Synchronous/Asynchronous
> 함수의 작업 완료 여부를 누가 신경쓰느냐
### Synchronous
> A 함수가 B 함수를 호출 할 때, B 함수의 결과를 A 함수가 처리하는 것.
### Asynchronous
> A 함수가 B 함수를 호출 할 때, B 함수의 결과를 B 함수가 처리하는 것. (callback)