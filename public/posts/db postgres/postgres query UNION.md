# postgres query UNION

```sql
-- UNION /// 중복 제거하고 모든 행을 합쳐서 보여줌
SELECT * FROM table1 UNION SELECT * FROM table2;
-- UNION ALL /// 중복 제거하지 않고 모든 행을 합쳐서 보여줌
SELECT * FROM table1 UNION ALL SELECT * FROM table2;
```
