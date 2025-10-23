# nginx base worker_process

## worker_processes

> Nginx는 멀티프로세스 아키텍처로 동작하며, 하나의 master process가 여러 개의 worker processes를 생성하여 요청을 처리함.
>
> > worker_processes 값이 클수록 더 많은 요청을 동시에 처리 가능하지만, 너무 많으면 리소스를 낭비할 수도 있음.
> >
> > > 보통 CPU 코어 개수에 맞춰 설정
> > >
> > > > core를 사용한 multi-process로 동작하므로, core 수만큼 worker process를 생성하여 cpu 사용량을 최적화

```conf
worker_processes auto; # CPU 코어 개수만큼 자동 설정
worker_processes 4; # 4개의 worker process 생성
```

## worker_connections

> worker 프로세스가 처리할 수 있는 최대 동시 연결 수는 worker_connections로 설정됨.
>
> 비동기 I/O 모델을 사용
>
> > 총 동시 연결 수 = worker_processes \* worker_connections
> >
> > > worker_processes 4;, worker_connections 1024; = 4 \* 1024 = 4096

```conf
worker_connections 1024;
```

## worker_rlimit_nofile

> worker process가 열 수 있는 파일 디스크립터 수를 제한하는 설정
>
> > 최적화를 위해 65535로 설정

```conf
worker_rlimit_nofile 65535;
```
