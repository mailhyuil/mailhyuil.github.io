# nodejs event-loop queue

> microtask가 먼저 실행된다
>
> > queue에는 콜백 함수들이 들어간다.

### microtask queue

> promise / async/await / nextTick / queueMicrotask
>
> > network io는 여기 promise에

### macrotask queue (task queue)

> setTimeout / setInterval / setImmediate
