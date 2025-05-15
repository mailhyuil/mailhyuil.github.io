# db query CTE (Common Table Expression)

> Subquery와 비슷하지만 가독성이 좋고 재사용이 가능합니다.
>
> 하지만 인덱스를 사용하지 못해 성능이 떨어질 수 있습니다.
>
> > WITH을 사용하여 쿼리를 작성 후 후에 메인 쿼리에서 참조

```sql
WITH sales_employees AS (
  SELECT name, salary
  FROM employees
  WHERE department = 'sales'
)
SELECT name
FROM sales_employees
WHERE salary > 50000;
```
