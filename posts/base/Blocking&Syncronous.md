# Blocking I/O, Syncronous Non-Blocking I/O, Asyncronous Non-Blocking I/O
> 순차적으로 작업이 처리되어야 한다면 동기 혹은 논블로킹 방식을 사용해야한다.
## 관심사
### Blocking/NonBlocking
> 호출된 함수가 제어권을 갖는냐 마느냐
>> Blocking : 호출되는 함수가 일을 다 마치고 리턴됨 *제어권 -> 호출된 함수*
>> Non-Blocking : 호출되는 함수가 바로 리턴됨 *제어권 -> 호출하는 함수*
### Synchronous/Asynchronous
> 함수의 작업 완료 여부를 누가 신경쓰느냐
>> Synchronous : 호출되는 함수의 작업완료 여부(리턴값)를 계속 확인 *작업 완료 여부 신경씀*
>> Asynchronous : 호출되는 함수에게 *callback*을 전달, 작업이 완료되면 callback을 실행 *작업 완료 여부 신경쓰지 않음*