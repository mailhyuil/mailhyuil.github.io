# postgreSQL unnest

> 배열을 행으로 바꾸어 준다
>
> > 읽기 쉽다

```sql
SELECT unnest(
    percentile_cont(ARRAY[.25,.5,.75])
    WITHIN GROUP (ORDER BY pop_est_2019)
) AS quartiles FROM us_counties_pop_est_2019;
```
