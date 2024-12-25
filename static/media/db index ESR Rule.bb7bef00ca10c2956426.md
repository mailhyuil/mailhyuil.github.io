# db index ESR Rule

> 복합 인덱스 순서를 정의하는 규칙
>
> > E -> S -> R 순으로 복합 인덱스 구성

```sh
=          동등 조건(Equality) # id, name, email ...
ORDER BY   정렬 조건(Sort)     # created_at, last_login, age, price ...
< >        범위 조건(Range)    # age, price, salary, date ...
```
