# postgres config autovacuum MVCC

> A single rows has multiple versions.
>
> > 하나의 행에 여러 버전이 존재한다.
> >
> > > 트랜잭션 상황에서 시작 시 데이터 버전과 끝나는 시점의 데이터 버전이 다른 경우 실패처리를 하기 위해 사용한다. (낙관적 락)

```sql
INSERT INTO users VALUES ('name', 'email@gmail.com')
ON CONFLICT DO NOTHING;

-- dead tuple 삭제
VACUUM users;
VACUUM FULL users;
```
