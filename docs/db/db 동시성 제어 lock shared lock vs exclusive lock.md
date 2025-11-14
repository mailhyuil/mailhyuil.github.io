# db 동시성 제어 lock shared lock vs exclusive lock

> 주의
>
> > shared/exclusive lock이 걸려있어도 다른 데이터를 추가하는 insert는 가능하다. (row-level lock)
> >
> > > `SELECT \* FROM table_name where age > 30 FOR SHARE;` 이런 SELECT 쿼리에 영향을 줄 수 있다.
> > >
> > > > exclusive lock이 걸려있어도 insert되는 데이터가 기존 데이터와 관련이 없다면 insert는 가능하다.

## Shared Lock (공유 락, S Lock, Read Lock)

> 읽기 가능, 수정 불가능
>
> > Exclusive lock이 걸려있으면 Shared lock을 획득할 수 없다.
> >
> > > FOR SHARE 로 획득
> > >
> > > > 만약 최종 예약 단계를 Shared Lock으로 구현한다면 유저 한명이 더 예약 단계에 돌입 시 첫번째 예약이 blocking 상태에 있게 됨
> > > >
> > > > 두번째 유저가 예약 시도 시 deadlock 발생하고 첫번째 유저는 성공 (하지만 계속 기다려야하니 이렇게 구현하면 안됨)

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

> 읽기 불가능 / 쓰기 불가능
>
> > Exclusive lock을 획득하기 위해서는 해당 값에 어떤한 Shared lock도 없어야한다.
> >
> > > FOR UPDATE 로 획득
> > >
> > > > 이 row를 다른 트랜젝션이 읽기 조차 못하게 해야하는 경우 : 좌석 예약 최종 단계 (확정 또는 취소할때까지 다른 사용자가 예약 못하게 해야하는 경우)
> > > >
> > > > 다른 유저가 같은 좌석으로 예약 시도하는 경우 server는 blocking 상태에 있음 (timeout으로 처리해서 다른 유저가 예약중입니다.. 필요)

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
