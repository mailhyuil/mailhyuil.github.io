# nodejs event-loop

> 이벤트 루프는 각 queue에 등록된 콜백 함수를 main thread로 가져오는 역할
>
> > 이벤트 루프의 각 반복을 "틱(tick)"이라고 합니다.

## 순서

1. main thread에서 발생한 promise.then()은 **microtask queue**에 등록
2. main thread에서 발생한 os level 비동기 작업은 libuv로 전달
3. libuv는 각 작업을 수행 (epoll, background thread pool) 후 완료되면 그 즉시 각 phase의 **macrotask queue**에 등록
4. phase 진입 전 **nexttick queue**와 **microtask queue**를 비움
5. phase 진입 후 각 phase의 **macrotask queue**에 등록된 콜백 함수를 이벤트 루프가 main thread로 가져와서 실행
6. phase의 **macrotask queue**가 비어있다면 phase는 skip
7. 반복

## fetch 예시

1. main thread에서 fetch()를 호출
2. fetch()는 libuv에 요청을 전달
3. libuv는 요청을 수행하고 완료되면 macrotask queue에 등록 (poll phase)
4. callback이 promise.then()으로 등록되어 microtask queue에 등록
5. microtask queue를 비우고 callback을 main thread로 가져와서 실행
