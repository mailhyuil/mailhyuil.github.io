# Covering Index & Index Only Scan

> 쿼리를 충족시키는데 필요한 모든 데이터를 갖고 있는 인덱스
>
> 이를 통해 Index Only Scan을 수행할 수 있다.
>
> > select할 필드들이 where, order by, group by 혹은 index에 포함된 경우다.
> >
> > > 인덱스 테이블에 필요한 필드가 있다면 데이터 블록에 접근하지 않아서 훨씬 빠르다
> > >
> > > > 인덱스 테이블에 필요한 필드가 없다면, limit을 사용해서 필요한 entity만 index로 pk를 빠르게 조회하고 찾은 pk값으로 다시 조회하라

```sql
EXPLAIN ANALYSE WITH Covering
AS (
    SELECT id FROM "Notice"
    WHERE "isPinned" = false
    AND
    "createdAt" > '2022-12-31'
    LIMIT 100
)

SELECT Covering.id, "Notice".title FROM "Notice"
INNER JOIN Covering
ON "Notice".id = Covering.id;

-- OR

EXPLAIN ANALYSE SELECT id, title FROM "Notice"
WHERE "isPinned" = false
AND
"createdAt" > '2022-12-31'
LIMIT 100;
```
