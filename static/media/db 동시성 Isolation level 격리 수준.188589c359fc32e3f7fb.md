# db transaction isolation level

> ANSI/ISO SQL standard 에서 정의한 표준
>
> > level에 따라서 RDBMS가 LOCK 전략이 달라짐
> >
> > > 격리 수준이 높을수록 동시성이 감소 (Lock을 더 많이 검) (성능 저하)

## Read uncommitted

> 커밋되지 않은 데이터를 읽을 수 있는 수준
>
> > Dirty Read 발생 가능

## Read committed

> 커밋된 데이터만 읽을 수 있는 수준
>
> > Dirty Read 방지 / Non-Repeatable Read 발생 가능
> >
> > > 대부분의 RDBMS가 default로 사용하는 격리 수준

## Repeatable Read

> 트랜잭션내에서 반복적으로 값을 읽어도 항상 같은 값을 유지
>
> (업데이트 된 값이 아닌 처음 시작할 때 읽은 데이터를 반복해서 읽는다는 의미)
>
> > Dirty Read 방지 / Non-Repeatable Read 방지 / Phantom Read 발생 가능
> >
> > > 내부적으로 비관적 락을 사용한다.

## Snapshot

> 트랜잭션 시작 시점의 모든 데이터를 스냅샷
>
> > 모든 Read 문제를 해결
> >
> > > postgresql에서는 MVCC(Multi-Version Concurrency Control)를 사용하여 repeatable read를 스냅샷으로 구현
> > >
> > > > 즉 postgres에서는 repeatable read 수준에서도 팬텀리드가 발생하지 않음!
> > > >
> > > > > 내부적으로 낙관적 락을 사용한다.

## Serializable

> 동시적으로 실행되는 트랜잭션을 순차적으로 실행
>
> > 모든 Read 문제를 해결
> >
> > > 항상 실패를 대비해야한다.
> > >
> > > > 내부적으로 비관적 락을 사용한다.
