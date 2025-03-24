# linux user thread & kernel thread

> 유저 스레드는 각 작업을 논리적으로 분리하는 역할이고
>
> > 커널 스레드는 실제 리소스를 가지고 작업을 수행하는 역할을 한다.

## kernel-level thread (os thread)

> os에 의해 관리되는 thread
>
> CPU, IO, 메모리 작업은 kernel-level thread가 관리
>
> > context switch가 느리지만 os의 리소스를 직접 사용 가능
> >
> > > 동시성과 병렬성을 모두 제공
> > >
> > > > 실제 리소스를 가지고 작업을 수행하는 역할

## user-level thread (user thread)

> user(application)에 의해 관리되는 thread (런타임이 관리하는 가상의 스레드)
>
> > CPU, IO, 메모리 작업을 직접 수행할 수 없고 kernel에 요청하여 kernel-level thread가 변환하여 수행
> >
> > e.g. nodejs의 background thread (libuv)
> >
> > > context switch가 빠르고 경량
> > >
> > > 동시성을 제공, 병렬성을 제공하지 않음
> > >
> > > > 커널에서 보면 하나의 단일 프로세스로 보이기 때문에 멀티코어를 직접 활용할 수 없음.
> > > >
> > > > > 작업을 논리적으로 분리하는 역할
