# postgres query planner

> SQL 쿼리를 실행 가능한 최적의 방식으로 변환해주는 엔진
>
> > SQL 쿼리를 작성하면 PostgreSQL이 그걸 어떻게 실행할지 결정하는 과정

## 단계

```txt
1. 쿼리 파싱 (Query Parsing)
2. 쿼리 재작성 (Query Rewriting)
3. 쿼리 최적화 (Query Optimization)
4. 실행 계획 생성 (Execution Plan Generation)

EXPLAIN SELECT * FROM users WHERE email = 'a@b.com';

Index Scan using users_email_idx on users  (cost=0.29..8.30 rows=1 width=100)
  Index Cond: (email = 'a@b.com')
```
