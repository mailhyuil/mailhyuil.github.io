# postgres view

> 미리 정의된 쿼리를 저장하는 가상 테이블

```sql
-- pg_catalog.pg_locks VIEW
SELECT locktype, relation::regclass, mode, transactionid tid, pid, granted FROM pg_catalog.pg_locks WHERE not pid=pg_backend_pid();
```
