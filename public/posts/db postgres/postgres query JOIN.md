# postgres query JOIN

```sql
-- INNER JOIN
SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id;
-- OUTER JOIN
SELECT * FROM table1 LEFT OUTER JOIN table2 ON table1.id = table2.id;
SELECT * FROM table1 RIGHT OUTER JOIN table2 ON table1.id = table2.id;
SELECT * FROM table1 FULL OUTER JOIN table2 ON table1.id = table2.id;
-- UNION
SELECT * FROM table1 UNION SELECT * FROM table2;
-- UNION ALL
SELECT * FROM table1 UNION ALL SELECT * FROM table2;
```
