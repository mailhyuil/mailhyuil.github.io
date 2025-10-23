# postgres with

> CTE는 Common Table Expression으로 간단하게 쿼리 결과를 일시적으로 저장하여 테이블처럼 사용하는 것입니다.
>
> > PostgreSQL에서는 with구문을 사용해 구현할 수 있습니다.
> >
> > > 쿼리문을 변수로 선언하는 것과 같다

```sql
WITH temp_query_result AS (
    SELECT
           category_name,
           product_id,
           sales,
           row_number() over (PARTITION BY category_name ORDER BY sales DESC) AS rank
    FROM product_sales
)

SELECT * FROM temp_query_result;
```
