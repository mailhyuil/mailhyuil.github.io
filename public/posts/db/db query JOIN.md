# db query JOIN

## INNER JOIN

```sql
SELECT column1, column2
FROM table1
INNER JOIN table2
ON table1.common_column = table2.common_column;
```

## LEFT JOIN

```sql
SELECT column1, column2
FROM table1
LEFT JOIN table2
ON table1.common_column = table2.common_column;
```

## RIGHT JOIN

```sql
SELECT column1, column2
FROM table1
RIGHT JOIN table2
ON table1.common_column = table2.common_column;
```

## FULL OUTER JOIN

```sql
SELECT column1, column2
FROM table1
FULL OUTER JOIN table2
ON table1.common_column = table2.common_column;
```

## CROSS JOIN

```sql
SELECT column1, column2
FROM table1
CROSS JOIN table2;
```

## SELF JOIN

```sql
SELECT a.column1, b.column2
FROM table1 a
JOIN table1 b
ON a.common_column = b.common_column;
```
