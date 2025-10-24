# db query CTE - WITH, RECURSIVE

> Subquery와 비슷하지만 가독성이 좋고 재사용이 가능합니다.
>
> 하지만 인덱스를 사용하지 못해 성능이 떨어질 수 있습니다.
>
> > WITH을 사용하여 쿼리를 작성 후 후에 메인 쿼리에서 참조
> >
> > > WITH RECURSIVE를 사용하여 재귀 쿼리도 작성할 수 있습니다.

## usage

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

## WITH RECURSIVE

```sql
WITH RECURSIVE employee_hierarchy AS (
  SELECT id, name, manager_id
  FROM employees
  WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, e.manager_id
  FROM employees e
  INNER JOIN employee_hierarchy eh ON e.manager_id = eh.id
)
SELECT *
FROM employee_hierarchy;
```
