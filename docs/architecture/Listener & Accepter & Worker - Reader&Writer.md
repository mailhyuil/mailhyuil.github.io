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

### Single Listener, Single Accepter, Single Worker

Node.js는 **하나의 프로세스**가 모든 Listener, Accepter, Worker 일을 처리

### Single Listener, Single Accepter, Multiple Worker

Memcached는 **하나의 리스너 스레드**가 있고, **여러 Worker 스레드**가 동시에 요청을 처리한다.

### Single Listener, Multiple Acceptor, Multiple Worker

nginx(accept_mutex on; 사용)가 listening 후 여러 Acceptor가 동시에 요청을 수락한다.

### Multiple Listener, Multiple Acceptor, Multiple Worker

**소켓 샤딩**(nginx, envoy, haproxy..)을 통해 하나의 포트에서 여러 서버를 띄우는 경우

### Multiple Listener

SO_REUSEPORT를 사용하여 여러 프로세스가 하나의 포트를 listen (소켓 샤딩)
