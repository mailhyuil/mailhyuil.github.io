# db 동시성 제어 MVCC Serialization Anomaly

> MVCC 모델은 물리적인 serialization을 할 수 없기 때문에 Serialization Anomaly(직렬화 이상)가 발생할 수 있다.
>
> Serialization Anomaly로 인해 write skew가 발생할 수 있다.
>
> > postgres에서는 Serializable 수준에서 Serializable Snapshot Isolation (SSI) 메커니즘으로 인해 리드 라이트 충돌이 발생 시 먼저 commit한 트랜잭션만 성공시킨다.
> >
> > > 물리적으로 순차 실행 시키는게 아닌 논리적으로 순차적으로 실행할 수 없다고 판단되면 실패시키는 매커니즘

## 먼저 commit한 transaction만 성공

> read를 하면 하나만 성공
>
> > repeatable read 수준에서는 둘 다 성공한다.

```sql
-- transaction 1
begin;
set transaction isolation level serializable;
select * from users where name='sb';
insert into users(name) values ('sb');


-- transaction 2
begin;
set transaction isolation level serializable;
select * from users where name='sb';
insert into users(name) values ('sb');

-- transaction 1
commit;
-- transaction 2
commit;
```

## 둘 다 성공

> read를 하지 않으면 둘 다 성공

```sql
-- transaction 1
begin;
set transaction isolation level serializable;
insert into users(name) values ('sb');

-- transaction 2
begin;
set transaction isolation level serializable;
insert into users(name) values ('sb');

-- transaction 1
commit;
-- transaction 2
commit;
```
