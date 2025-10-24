# postgres query batch query & bulk query

## 다중 value문 사용

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES
    (value1, value2, ...),
    (value3, value4, ...),
    ...
    (valueN, valueM, ...);
```

## CTE(Common Table Expression) 사용

```sql
WITH data_to_insert AS (
    SELECT value1, value2, ...
    UNION ALL
    SELECT value3, value4, ...
    UNION ALL
    ...
    SELECT valueN, valueM, ...
)
INSERT INTO table_name (column1, column2, ...)
SELECT * FROM data_to_insert;
```
