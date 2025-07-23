# db objects WINDOW FUNCTION

```sql
ROW_NUMBER() -- select된 row에 순번을 매김
RANK() -- 동일한 값에 동일한 순위를 매김, 다음 순위는 건너뜀
DENSE_RANK() -- 동일한 값에 동일한 순위를 매김, 다음 순위는 건너뛰지 않음
AVG() -- 현재 row를 기준으로 평균값을 계산
SUM() -- 현재 row를 기준으로 합계값을 계산
LAG() -- 이전 row의 값을 가져옴
LEAD() -- 다음 row의 값을 가져옴
FIRST_VALUE() -- 현재 row의 첫 번째 값을 가져옴
LAST_VALUE() -- 현재 row의 마지막 값을 가져옴
NTH_VALUE() -- 현재 row의 N번째 값을 가져옴
NTILE(n) -- 현재 row를 n개의 그룹으로 나눔
PERCENT_RANK() -- 현재 row의 순위를 백분율로 나타냄
```

## usage

> WINDOW_FUNCTION() OVER () 절을 사용하여 윈도우 함수를 정의합니다.
>
> > 보통 PARTITION BY란 윈도우 함수에서 데이터를 그룹화하는 데 사용되는 절입니다.
> >
> > 이 절을 사용하면 특정 열을 기준으로 데이터를 나누고, 각 그룹 내에서 윈도우 함수를 적용할 수 있습니다.

```sql
SELECT name, department, salary,
AVG(salary) OVER (PARTITION BY department) as dept_avg
FROM employees;
```
