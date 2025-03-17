# postgres query JOIN

```sql
-- INNER JOIN /// 교집합
SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id;
-- OUTER JOIN (LEFT) /// 왼쪽 테이블을 기준으로 오른쪽 테이블을 합침
SELECT * FROM table1 LEFT OUTER JOIN table2 ON table1.id = table2.id;
-- OUTER JOIN (RIGHT) /// 오른쪽 테이블을 기준으로 왼쪽 테이블을 합침
SELECT * FROM table1 RIGHT OUTER JOIN table2 ON table1.id = table2.id;
-- OUTER JOIN (FULL) /// 왼쪽, 오른쪽 테이블을 모두 합침
SELECT * FROM table1 FULL OUTER JOIN table2 ON table1.id = table2.id;
-- CROSS JOIN /// 왼쪽, 오른쪽 테이블을 모두 합침
SELECT * FROM table1 CROSS JOIN table2;
```
