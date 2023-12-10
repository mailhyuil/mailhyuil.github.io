# Blocking, Synchronous Non-Blocking, Asyncronous Non-Blocking

> 순차적으로 작업이 처리되어야 한다면 동기 혹은 논블로킹 방식을 사용해야한다.
>
> > blocking/non-blocking과 sync/async의 차이점은 관심사

```sh
Blocking 기다림
Non-blocking 기다리지 않음
Synchronous 내가 함
Asynchronous 다른 사람 시킴 (callback)

# Synchronous
A 함수가 B 함수를 호출 할 때, B 함수의 결과를 A 함수가 처리하는 것.

# Asynchronous
A 함수가 B 함수를 호출 할 때, B 함수의 결과를 B 함수가 처리하는 것. (callback)

# Blocking
A 함수가 B 함수를 호출 할 때, B 함수가 자신의 작업이 종료되기 전까지 A 함수에게 제어권을 돌려주지 않는 것

# Non-Blocking
A 함수가 B 함수를 호출 할 때, B 함수가 제어권을 바로 A 함수에게 넘겨주면서, A 함수가 다른 일을 할 수 있도록 하는 것.
```

## Blocking/NonBlocking

> 호출된 함수가 제어권을 갖는냐 마느냐

## Synchronous/Asynchronous

> 함수의 작업 완료 여부를 누가 신경쓰느냐
