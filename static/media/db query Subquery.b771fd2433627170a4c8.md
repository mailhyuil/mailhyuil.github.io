# db query subquery

> ()를 사용하여 서브쿼리를 작성할 수 있습니다.
>
> > "상수값"으로 평가될 값은 서브쿼리로 작성하면 한번 실행 후 캐싱되어 성능이 향상됩니다.
> >
> > > 만약 값이 계속 바뀌는 값이라면 성능 저하를 초래할 수 있습니다.

```sql
-- 1
SELECT * FROM products
WHERE category_id = (SELECT id FROM categories WHERE name = '전자제품');

-- 2
SELECT name
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```
