# postgres query EXISTS

> 서브 쿼리의 값이 존재하는지만 확인
>
> > 전체 카운트를 조회하지 말고 있는지만 확인해라

```SQL
SELECT COUNT(a.key)
FROM A a
WHERE EXISTS (SELECT 1 FROM B b WHERE a.key = b.key)
```
