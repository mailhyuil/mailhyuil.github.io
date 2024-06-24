# postgres transaction lock 조회

```sql
SELECT  t.relname,
        l.locktype,
        page,
        virtualtransaction,
        pid,
        mode,
        granted
FROM pg_locks l,
	 pg_stat_all_tables t
WHERE l.relation = t.relid
ORDER BY relation ASC;
```
