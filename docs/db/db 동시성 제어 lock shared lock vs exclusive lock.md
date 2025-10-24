# db 동시성 제어 lock shared lock vs exclusive lock

> 주의
>
> > lock이 걸려있어도 insert는 가능하다. (lock은 기존 데이터들에게만 걸리기 때문에 새로 추가되는 값에는 의미가 없기 때문이다)
> >
> > exclusive lock이 걸려있어도 insert되는 데이터가 기존 데이터와 관련이 없다면 insert는 가능하다.

## Shared Lock (공유 락, S Lock, Read Lock)

> 게임을 예로 들면 여러 플레이어가 동시에 사용할 수 있는 방어 기술이다.
>
> > 상대방이 플레이어를 볼 수 있지만 (read o), 공격할 수 없다. (write x)
> >
> > > Shared lock을 획득하기 위해서는 해당 값에 다른 배타락이 있어도 된다.
> > >
> > > > FOR SHARE 로 획득

```sql
-- transaction 1
BEGIN;
SELECT * FROM table_name FOR SHARE;
COMMIT;
-- transaction 2
BEGIN;
SELECT * FROM table_name FOR SHARE; -- 가능
COMMIT;
-- transaction 3
BEGIN;
UPDATE users SET name='test' where name='sb'; -- transaction 1이 commit되기 전까지 대기
COMMIT;
```

## Exclusive Lock (배타 락, X Lock, Write Lock)

> 오직 한 플레이어만 사용할 수 있는 은신 기술
>
> > 다른 플레이어가 볼 수도 없고 공격할 수도 없다. (read x, write x)
> >
> > > Exclusive lock을 획득하기 위해서는 해당 값에 어떤한 공유락도 없어야한다.
> > >
> > > > FOR UPDATE 로 획득 (row-level lock)

```sql
-- transaction 1
BEGIN;
SELECT * FROM table_name FOR UPDATE;
COMMIT;
-- transaction 2
BEGIN;
SELECT * FROM table_name FOR UPDATE; -- transaction 1이 commit되기 전까지 대기
COMMIT;
-- transaction 3
BEGIN;
UPDATE users SET name='test' where name='sb'; -- transaction 1이 commit되기 전까지 대기
COMMIT;
```
