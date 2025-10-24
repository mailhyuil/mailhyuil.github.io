# postgres function pg_promote - 승격

> read-only replica를 read-write로 승격시키는 명령어

```sql
SELECT pg_promote();
-- or --
pg_ctl promote -D /usr/local/pgsql/data
```
