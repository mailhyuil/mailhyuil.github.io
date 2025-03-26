# nodejs event loop timer

## setTimeout

> Timer Phase에서 실행된다.

## setImmediate

> I/O Polling Phase 이후에 실행된다.
>
> > setImmediate는 I/O Polling Phase가 끝난 후에 실행된다. 즉, I/O 작업이 완료된 후에 실행된다.
> >
> > > I/O의 후속 작업을 수행하려면 setImmediate를 사용하면 빠르다.

## setInterval
