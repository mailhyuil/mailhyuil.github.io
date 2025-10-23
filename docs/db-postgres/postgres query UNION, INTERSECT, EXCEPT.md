# postgres query UNION INTERSECT EXCEPT

```sql
-- UNION /// 중복 제거하고 모든 행을 합쳐서 보여줌
SELECT * FROM table1 UNION SELECT * FROM table2;
-- UNION ALL /// 중복 제거하지 않고 모든 행을 합쳐서 보여줌
SELECT * FROM table1 UNION ALL SELECT * FROM table2;
-- INTERSECT /// 교집합
SELECT * FROM table1 INTERSECT SELECT * FROM table2;
-- EXCEPT /// 차집합
SELECT * FROM table1 EXCEPT SELECT * FROM table2;
```
