# db query Pivot & Unpivot

> 행과 열을 변환하는 기법

## Pivot

> 행을 열로 변환하는 방법

```sql
-- PostgreSQL 스타일 (CASE + GROUP BY)
SELECT
  name,
  SUM(CASE WHEN month = 'Jan' THEN amount END) AS jan,
  SUM(CASE WHEN month = 'Feb' THEN amount END) AS feb
FROM sales
GROUP BY name;
```

## Unpivot

> 열을 행으로 변환하는 방법

```sql
-- PostgreSQL은 직접 UNPIVOT 없음 → UNION 사용
SELECT name, 'jan' AS month, jan AS amount FROM pivoted_sales
UNION ALL
SELECT name, 'feb', feb FROM pivoted_sales;
```
