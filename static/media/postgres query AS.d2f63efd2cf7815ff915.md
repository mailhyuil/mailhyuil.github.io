# postgres query AS

> 별칭을 지정할 때 사용

```sql
-- AS
SELECT column_name AS alias_name FROM table_name;

SELECT * FROM (SELECT * FROM table_name) AS alias_name;
```
