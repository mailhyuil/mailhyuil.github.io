# postgres base lock

## TABLE-LEVEL LOCK

> 쿼리에 따라서 자동으로 획득

```sql
ACCESS SHARE -- SELECT 시 획득
ROW SHARE -- SELECT FOR UPDATE, SELECT FOR SHARE 시 획득
ROW EXCLUSIVE -- UPDATE, DELETE, INSERT 시 획득
SHARE UPDATE EXCLUSIVE -- VACUUM, ANALYZE... 시 획득
SHARE -- CREATE INDEX 시 획득
SHARE ROW EXCLUSIVE -- CREATE COLLATION, CREATE TRIGGER, ALTER TABLE 시 획득
EXCLUSIVE -- REFRESH MATERIALIZED VIEW CONCURRENTLY 시 획득
ACCESS EXCLUSIVE -- DROP TABLE, TRUNCATE, REINDEX, CLUSTER, VACUUM FULL, REFRESH MATERIALIZED VIEW... 시 획득
```

## ROW-LEVEL LOCK

> FOR문을 통해서 획득

```sql
-- FOR lock_strength [ OF table_name [, ...] ] [ NOWAIT | SKIP LOCKED ] --
SELECT * FROM users WHERE id=1 FOR UPDATE;
SELECT * FROM users WHERE id=1 FOR NO KEY UPDATE;
SELECT * FROM users WHERE id=1 FOR SHARE;
SELECT * FROM users WHERE id=1 FOR KEY SHARE;
```

## PAGE-LEVEL LOCK

## Advisory LOCK

> 트랜잭션 이외 다수의 어플리케이션, 시스템에서 수행되는 트랜잭션들의 LOCK을 조절하기 위한 LOCK
>
> > 분산락
> >
> > > 일반적인 데이터베이스 락(lock)과는 다르게 사용자가 직접 지정하는 잠금 메커니즘

```sql
-- session level
pg_advisory_lock(key bigint)
pg_try_advisory_lock(key bigint)
pg_advisory_unlock(key bigint)

-- transaction level
pg_advisory_xact_lock(key bigint)
pg_try_advisory_xact_lock(key bitint)
```
