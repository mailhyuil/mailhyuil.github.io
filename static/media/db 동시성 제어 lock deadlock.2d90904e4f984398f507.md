# db transaction lock Dead lock (데드 락)

> 두 개 이상의 트랜잭션이 서로 상대방의 락을 기다리고 있어 무한 대기 상태에 빠지는 현상
>
> > 데드락을 방지하기 위해서는 트랜잭션을 짧게 유지하고, 트랜잭션을 사용하는 순서를 일정하게 유지하는 것이 중요하다.
> >
> > > timeout을 설정하여 데드락을 방지할 수 있다.

```sql
-- transaction 1
begin transaction;
insert into test values(20);
insert into test values(30);
-- transaction 2
begin transaction;
insert into test values(30);
insert into test values(20);

-- deadlock detected
-- deadlock을 먼저 발생시킨 transaction은 rollback 된다.
```
