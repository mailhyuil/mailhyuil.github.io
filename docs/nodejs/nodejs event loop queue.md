# nodejs event loop queue

> queue에는 완료된 콜백 함수들이 libuv에 의해 등록되어진다.

### nextTick queue

> 단 한개만 존재
>
> > process.nextTick으로 등록된 콜백 함수
> >
> > > 각 phase 시작 전에 이 next tick queue를 전부 비운다.

### microtask queue

> 단 한개만 존재
>
> > promise.then(), catch(), finally() / async/await function / queueMicrotask
> >
> > > 각 phase 시작 전에 이 microtask queue를 전부 비운다.

### macrotask queue

> 각 phase마다 전용 macrotask queue가 존재한다.
>
> > setTimeout / setInterval (timer)
> >
> > TCP, fs, dns 등에서 발생한 에러 콜백 (pending callbacks)
> >
> > epoll task, background thread task (poll)
> >
> > setImmediate (check)
> >
> > on('close') (close callbacks)
