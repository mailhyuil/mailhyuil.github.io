# db 동시성 제어 lock deadlock 방지

> 두개의 트랜잭션이 서로가 서로의 자원을 사용하려고 대기하고 있을 때 발생
>
> > e.g. 두개의 트랜잭션이 같이 같은 자원에 share lock을 걸고 데이터를 읽은 후 데이터를 update 하려고 하면 서로가 쓰기가 차단하기 때문에 데드락이 발생한다.

## 방지법

```txt
FOR SHARE FOR SHARE problem : 두개의 트랜잭션이 같이 같은 자원에 share lock을 걸고 데이터를 읽은 후 데이터를 update 하려고 하면 서로가 쓰기가 차단하기 때문에 데드락이 발생한다.
(FOR UPDATE를 사용하면 해결 가능)

FOR UPDATE FOR UPDATE problem : 두개의 트랜잭션이 각각 자원에 exclusive lock을 걸고 서로의 값을 읽거나 쓰려고 할 때 발생
```
