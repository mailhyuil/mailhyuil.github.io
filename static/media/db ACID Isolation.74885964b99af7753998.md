# db transaction isolation

## Dirty Read (더티 리드)

> 다른 트랜잭션이 커밋되지 않은 데이터도 읽는 수준
>
> > 다른 트랜잭션이 rollback 된다면??

## Non-Repeatable Read (비반복 가능한 읽기)

> 다른 트랜잭션의 커밋된 데이터를 읽는 수준
>
> > 트랜잭션 내에서 읽은 후 커밋되기 전에 다른 트랜잭션이 수정(UPDATE), 삭제(DELETE)한다면 발생
> >
> > > Repeatable Read로 해결 가능

## Phantom Read (팬텀 리드)

> 다른 트랜잭션의 새로 추가된 데이터를 읽는 수준
>
> > 트랜잭션 내에서 읽은 후 커밋되기 전에 다른 트랜잭션이 추가(INSERT)한다면 발생
> >
> > > Serializable로 해결 가능 (postgres에서는 Repeatable Read로도 해결 가능)

## Lost Update (잃어버린 업데이트)

> 다른 트랜잭션이 업데이트한 데이터를 덮어쓰는 수준
>
> > 트랜잭션 내에서 업데이트한 데이터를 커밋하기 전에 다른 트랜잭션이 업데이트한다면 발생
> >
> > > Serializable로 해결 가능
