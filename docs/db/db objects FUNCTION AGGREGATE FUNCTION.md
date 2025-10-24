# db objects FUNCTION AGGREGATE FUNCTION

> 보통 GROUP BY 절을 사용하여 데이터를 그룹화하고, 집계 함수를 사용하여 각 그룹에 대한 요약 정보를 계산합니다.

```sql
COUNT()
SUM()
AVG()
MIN()
MAX()
STDDEV()
VARIANCE()
GROUP_CONCAT()
ARRAY_AGG()
JSON_AGG()
...
```

## usage

```sql
SELECT department, COUNT(*) as employee_count, AVG(salary) as avg_salary
FROM employees
GROUP BY department
HAVING COUNT(*) > 10;
```
