# db transaction isolation

## Dirty Read (더티 리드)

> 다른 트랜잭션이 커밋되지 않은 데이터도 읽는 수준
>
> > 다른 트랜잭션이 rollback 된다면??

## Non-Repeatable Read (비반복 가능한 읽기)

> 다른 트랜잭션의 커밋된 데이터를 읽는 수준
>
> > 읽는 중간에 commit 된다면??

## Phantom Read (팬텀 리드)

> 다른 트랜잭션의 새로 추가된 데이터를 읽는 수준
>
> > 읽는 중간에 insert 된다면??

## Lost Update (잃어버린 업데이트)

> 다른 트랜잭션이 업데이트한 데이터를 덮어쓰는 수준
>
> > 먼저 읽은 데이터를 업데이트 하기 전에 다른 트랜잭션이 업데이트 한다면??
