# Listener & Accepter & Worker - Reader&Writer

> 비즈니스 환경에 따라서 몇개의 listener, accepter, worker를 둘지를 결정해야 효과적인 서버 아키텍처를 구축할 수 있다.

## Listener

> > ip:port를 listen하는 주체 process/thread

## Accepter

> socket ID에 접근할 수 있는 주체 process/thread
>
> > accept를 호출하여 connection을 수락하는 주체

## Worker (Reader&Writer)

> connection이 수립된후 작업을 수행하는 주체 process/thread

```sh
Single Listener, Single Accepter, Single Worker # nodejs는 하나의 프로세스가 모든 Listener, Accepter, Worker 일을 처리
Single Listener, Single Accepter, Multiple Worker # memcached multi-threading을 사용하여 여러 worker가 동시에 작업을 수행
Single Listener, Multiple Acceptor, Multiple Worker # nginx 로드밸런싱
Multiple Listener, Multiple Acceptor, Multiple Worker # (소켓 샤딩) nginx, envoy, haproxy.. 하나의 포트에서 여러 서버를 띄우는 경우
Multiple Listener # SO_REUSEPORT를 사용하여 여러 프로세스가 하나의 포트를 listen (소켓 샤딩)
```
