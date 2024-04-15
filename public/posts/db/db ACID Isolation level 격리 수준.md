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
> > Dirty Read 방지 / Non-Repeatable Read 방지 / Phantom Read 발생 가능

## Serializable

> 동시적으로 실행되는 트랜잭션을 순차적으로 실행
>
> > 모든 Read 문제를 해결

## Snapshot

> 트랜잭션 시작 시점의 모든 데이터를 스냅샷
>
> > 모든 Read 문제를 해결
