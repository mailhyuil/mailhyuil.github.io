# postgres transaction 조회

```sql
SELECT  datname,
        pid,
        usename,
        application_name,
        client_addr,
        client_port,
        backend_start,
        query_start,
        wait_event_type,
        state,
        backend_xmin
        query
FROM pg_stat_activity;
```
