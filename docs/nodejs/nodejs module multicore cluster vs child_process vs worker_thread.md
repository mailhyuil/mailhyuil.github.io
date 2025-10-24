# nodejs module multicore cluster vs child_process vs worker_thread

> worker_threads, child_process는 둘 다 멀티 코어를 활용할 수 있다.
>
> > 차이점은 worker_threads는 parallel multithreading으로 메모리가 공유가 가능하고
> >
> > child_process는 multiprocessing으로 메모리 공유가 불가능하다.
> >
> > > worker(cpu-bound) -> worker_threads
> > >
> > > worker(cpu-bound, isolation) -> child_process (child_process 내에서 worker_threads를 사용하는 방법도 있음)
> > >
> > > web server -> cluster

## worker_threads

> 멀티코어를 사용한 병렬 쓰레딩으로 작업을 수행
>
> > "ArrayBuffer", "SharedArrayBuffer" 를 사용하여 메모리를 공유할 수 있음

```txt
# cpu-bound 작업에 worker_threads를 사용하는 이유

1. child_process는 메모리를 공유하지 않음으로 IPC를 이용해 데이터를 복사하여 전달해야함 (오버헤드)
2. 프로세스를 생성하는데에서 오버헤드가 생긴다.
```

## child_process

> 하나의 프로세스를 여러개의 "자식 프로세스"로 나눌 때 사용
>
> > 메모리를 분리하여 완전히 독립적으로 수행하는 프로세스를 생성하는게 핵심 (exec를 사용하여 외부 프로그램을 실행할 수 있다.)
> >
> > > 메모리를 공유하지 않으니 프로세스간 통신을 위해 IPC를 사용해야함
> > >
> > > > 하나의 큰 작업이 아닌 여러개의 분리된 작은 작업을 수행할 때 사용하면 좋다.

## cluster

> cluster는 child_process를 사용하여 구현됨
>
> > cluster는 같은 포트를 공유하는 프로세스를 생성할 수 있음 (같은 포트에서 다른 리퀘스트를 받아서 여러개의 프로세스로 작업)
> >
> > > 같은 포트를 공유하는 여러개의 프로세스를 나눌 때 사용
> > >
> > > > 포트를 공유하며 여러개의 프로세스를 사용하여 병렬 처리를 하기 위해서 사용 (pm2)

```txt
cluster.fork is implemented on top of child_process.fork.
The extra stuff that cluster.fork brings is that, it will enable you to listen on a shared port.
If you don't want it, just use child_process.fork.
So yeah, use cluster for web servers and child_process for workers.
cluster allows TCP servers to be shared between workers.
```
