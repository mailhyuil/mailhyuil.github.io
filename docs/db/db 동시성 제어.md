# db base 동시성 제어

> 동시성 제어 기법에는 3가지가 있다.

## Locking

> 트랜잭션을 수행중인 데이터에는 다른 트랜잭션이 접근하지 못하도록 하는 방법

## Validation

> Timestamp, Hash, Version을 사용
>
> > 먼저 트랜잭션을 수행하고 트랜잭션이 종료할 때 적합성을 검증 후 반영
> >
> > > Optimistic Concurrency Control (낙관적 동시성 제어)
