# linux base thread

```txt
하나의 스레드가 연산 작업을 수행하기 위해서 CPU 실행권한(CPU time)을 얻어야한다. (CPU Scheduler가 부여해줌)
멀티코어 CPU라면 하나의 프로세스 내 여러 스레드가 동시에 여러 코어의 실행권한을 얻을 수 있다. (parallel multithreading)
프로그램 자체가 싱글 스레드 프로그램이라면 위의 작업이 불가능 할것이다. (e.g. nodejs)
nodejs는 싱글 스레드지만 worker_threads 모듈로 위의 작업을 지원한다.
OS에서 CPU 제약조건(CPU Affinity)를 설정해뒀다면 멀티코어를 사용 못 할 수도 있다.
```

## multi-threading

> 하나의 스레드가 CPU를 사용하는 동안 다른 스레드들이 I/O 작업을 할 수 있다.

## Parallel Multithreading

> 현대의 컴퓨터 시스템은 쓰레드를 멀티 코어에서 실행시킬 수 있다.
>
> > 따라서 CPU bound 작업을 Parallel Threading을 사용해서 각 멀티 코어에서 병렬로 처리할 수 있다.
> >
> > > nodejs의 worker_threads

## async I/O

> main thread가 CPU 작업을 수행하고
>
> > event loop를 통한 Task Queue에 있는 작업들은 백그라운드의 멀티 스레드(Time Sliced Multithreading)를 사용하여 I/O 작업을 할 수 있다.
> >
> > > I/O 작업은 cpu를 사용하지 않고도 수행할 수 있기 때문에 비동기로 처리할 수 있다.
