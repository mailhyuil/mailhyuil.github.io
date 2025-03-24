# nodejs event-loop

> 이벤트 루프는 각 queue에 등록된 콜백 함수를 main thread로 가져오는 역할
>
> > 이벤트 루프의 각 반복을 "틱(tick)"이라고 합니다.

## 순서

1. main thread에서 발생한 promise는 microtask queue에 등록
2. main thread에서 발생한 os level 비동기 작업은 libuv로 전달
3. libuv는 각 작업을 수행 (epoll, background thread pool)
4. libuv는 각 작업이 완료되면 그 즉시 각 phase의 macrotask queue에 등록
5. phase 진입 전 nexttick queue와 microtask queue를 비움
6. phase 진입 후 각 phase의 macrotask queue에 등록된 콜백 함수를 main thread로 가져와서 실행
7. phase의 macrotask queue가 비어있다면 phase는 skip
8. 반복
