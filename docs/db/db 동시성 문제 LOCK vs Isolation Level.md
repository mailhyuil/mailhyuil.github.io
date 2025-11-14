# db 동시성 문제 LOCK vs Isolation Level

## LOCK

> 트랜잭션 내에서 쓰기 시 데이터의 무결성이 깨지는 문제를 해결하기 위해서 LOCK을 사용
>
> > e.g. double booking problem

## Isolation Level

> 트랜잭션 내에서 읽기 시 데이터의 일관성이 깨지는 문제를 해결하기 위해서 Isolation Level을 사용
>
> > e.g. dirty read, non-repeatable read, phantom read, read skew
> >
> > > double booking problem을 예방 할 수는 있지만 감지하여 실패처리를 시킬 뿐 사전에 예방할 수 없기에 비효율적이다.
