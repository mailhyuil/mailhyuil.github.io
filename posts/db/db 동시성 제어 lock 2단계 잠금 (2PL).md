# db 동시성 제어 lock 2단계 잠금 (2PL)

> 배타적 락을 사용하여 동시성 제어

```sql
SELECT * FROM table_name FOR UPDATE;
```
