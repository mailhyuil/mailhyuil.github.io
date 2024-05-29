# node module cluster vs child_process vs worker_threads

> 셋 다 multi-processing이다.
>
> cluster는 child_process를 사용하여 구현됨
>
> > cluster는 같은 포트를 공유하는 프로세스를 생성할 수 있음 (같은 포트에서 다른 리퀘스트를 받아서 여러개의 프로세스로 작업)
> >
> > > web server용으로는 cluster, worker용으로는 child_process를 사용

```sh
cluster.fork is implemented on top of child_process.fork.
The extra stuff that cluster.fork brings is that, it will enable you to listen on a shared port.
If you don't want it, just use child_process.fork.
So yeah, use cluster for web servers and child_process for workers.

cluster allows TCP servers to be shared between workers.

# worker_threads : 다른 프로세스에서 작업을 수행하지만 SharedArrayBuffer를 사용하여 메모리를 공유할 수 있음 (멀티 프로세싱이다)
# child_process : 백그라운드 작업, 하나의 프로세스를 여러개의 "자식 프로세스"로 나눌 때 사용 background tasks or to split a single process into multiple
# cluster : 같은 포트를 공유하는 여러개의 프로세스를 나눌 때 사용
```
