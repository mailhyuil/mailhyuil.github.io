# 커버링 인덱스

> 쿼리를 충족시키는데 필요한 모든 데이터를 갖고 있는 인덱스
>
> > select할 필드들이 where, order by, limit, group by 혹은 index에 포함된 경우다.
> >
> > > 인덱스 테이블에 필요한 필드가 있다면 데이터 블록에 접근하지 않아서 훨씬 빠르다
> > >
> > > > 인덱스 테이블에 필요한 필드가 없다면, limit을 사용해서 필요한 entity만 index로 pk를 빠르게 조회하고 찾은 pk값으로 다시 조회하라

```sql
with 커버링 as(
  SELECT id
  FROM Member
  WHERE age < 30
  LIMIT 2
)
```
