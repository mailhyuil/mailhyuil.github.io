# linux base thread

## multi-threading

> 하나의 스레드가 CPU를 사용하는 동안 다른 스레드들이 I/O 작업을 할 수 있다.

## async I/O

> Task Queue에 있는 작업들은 백그라운드의 멀티 스레드를 사용하여 I/O 작업을 할 수 있다.
>
> > event loop

## parallel-threading

> 현대의 컴퓨터 시스템은 쓰레드를 멀티 코어에서 실행시킬 수 있다.
>
> > 따라서 CPU bound 작업을 Parallel Threading을 사용해서 각 멀티 코어에서 병렬로 처리할 수 있다.
> >
> > > nodejs의 worker_threads
