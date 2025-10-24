# postgreSQL 중앙값

```sql
-- 중앙값을 계산 --
SELECT percentile_cont(n)

-- 이산값을 계산 --
SELECT percentile_desc(n)

-- 25% 값을 찾는다 --
SELECT percentile_cont(.25) -- 25% 값을 찾는다
WITHIN GROUP(ORDER BY field) AS something;

-- 50% 값을 찾는다 --
SELECT percentile_cont(.5)
WITHIN GROUP(ORDER BY field) AS something;

-- 25%, 50%, 75% 값을 찾는다 --
SELECT percentile_cont(ARRAY[.25,.5,.75])
```
