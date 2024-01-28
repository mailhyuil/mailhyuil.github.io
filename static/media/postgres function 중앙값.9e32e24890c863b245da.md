# postgreSQL 중앙값

```sql
percentile_cont(n)
percentile_desc(n) // 이산값을 계산

percentile_cont(.5) // 50% 값을 찾는다
WITHIN GROUP(ORDER BY field) AS something;

percentile_cont(.25) // 25% 값을 찾는다
WITHIN GROUP(ORDER BY field) AS something;

percentile_cont(ARRAY[.25,.5,.75])
```
