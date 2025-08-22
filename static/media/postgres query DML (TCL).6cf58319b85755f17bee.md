# postgreSQL TCL (Transaction Control Language)

> 트랜젝션을 제어하는 명령어
>
> > COMMIT, ROLLBACK, SAVEPOINT

```sql
-- 트랜젝션 시작
BEGIN;
-- 트랜젝션 종료
COMMIT;
-- 트랜젝션 취소
ROLLBACK;
-- 트랜젝션 중간저장
SAVEPOINT "savepoint_name";
-- 트랜젝션 중간저장 취소
ROLLBACK TO "savepoint_name";
```
