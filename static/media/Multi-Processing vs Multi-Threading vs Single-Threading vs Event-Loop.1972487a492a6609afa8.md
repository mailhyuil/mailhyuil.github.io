# Multi-Processing vs Multi-Threading vs Single-Threading vs Event-Loop

> 각 프로그램의 특징과 cpu 작업량을 파악하여 적절한 갯수의 프로세스나 스레드를 생성하여 최적화해야한다.

## Multi-Processing

> 하나의 프로세스가 여러 개의 자식 프로세스를 생성하는 것 (nginx, postgresql)
>
> > 또는 하나의 프로세스를 클러스터 형태로 여러 개의 프로세스로 나누어서 처리하는 것 (nodejs cluster mode)
> >
> > > cpu core 갯수에 맞춰서 worker_processes의 갯수를 잘 조절해야 한다.

## Multi-Threading

> 하나의 프로세스 내에 여러 코어를 사용할 수 있는 여러 개의 스레드를 생성하는 것 (java)
>
> > 멀티 프로세싱이 필요없다.
> >
> > > cpu core 갯수에 맞춰서 worker_threads의 갯수를 잘 조절해야 한다.

```txt
Java threads are "user" threads, but under the hood, the Java Virtual Machine is using kernel threads and delegating the user threads CPU time on each kernel thread in its kernel thread pool.
```

## Single-Threading

> 하나의 프로세스 내에 하나의 스레드만 사용하는 것 (nodejs, nginx)
>
> > 하나의 스레드가 cpu 작업을 하고 나머지 스레드는 백그라운드에서 event-loop를 통해 io 작업을 처리한다.
> >
> > > 보통 event-loop를 통해 io 작업을 비동기로 처리
> > >
> > > > 여러개의 core를 사용하고 싶다면 cluster mode를 사용해야한다.

## Event-Loop (AsyncIO)

### libuv

> v8 engine에서 사용하는 event-loop 라이브러리

### netpoll

> go에서 사용하는 event-loop 라이브러리

### netty

> java nio에서 사용하는 event-loop 라이브러리

### mio

> rust에서 사용하는 event-loop 라이브러리
