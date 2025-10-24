# nodejs event loop phase

> 각 phase마다 해당 phase의 queue에 있는 콜백 함수를 메인스레드로 가져와서 실행한다.
>
> > main thread에서 발생한 요청은 즉시 libuv에 의해 background thread 또는 epoll을 사용하여 감시됨
> >
> > 작업이 완료되면 그 즉시 각 phase의 queue에 등록
> >
> > > event-loop는 단순히 각 queue에 등록된 콜백을 main thread로 가져오는 역할만 수행함
> > >
> > > > phase의 queue가 비어있다면 phase는 skip된다.

0. process.nextTick으로 등록된 내의 작업을 main thread로 가져와서 실행
1. microtask queue 내의 작업을 main thread로 가져와서 실행
2. timer
   > setTimeout / setInterval을 사용하여 delay가 지난 콜백 함수 main thread로 가져와서 실행
3. pending callbacks
   > TCP, fs, dns 등에서 발생한 에러 콜백 함수를 main thread로 가져와서 실행
4. idle, prepare
   > Nodejs 내부적으로 사용되는 콜백 함수
   >
   > > libuv가 내부 작업을 준비
   > >
   > > > 사용자가 사용할 수 없는 phase
5. poll
   > libuv가 완료한 작업(epoll, background thread pool)의 콜백을 main thread로 가져와서 실행
6. check
   > setImmediate에 의해 등록된 콜백을 main thread로 가져와서 실행
7. close callbacks
   > close 이벤트에 의해 등록된 콜백을 main thread로 가져와서 실행
   >
   > > e.g. socket.on('close', callback)

```txt
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```
