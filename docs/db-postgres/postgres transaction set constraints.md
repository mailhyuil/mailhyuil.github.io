# postgres transaction set constraints

> 트랜잭션 내에서 제약 조건을 어떻게 검사할지 설정
>
> > 기본으로 immediate로 설정되어 있어, 즉시 검사한다.
> >
> > > deferred로 설정하면 커밋 전에 검사한다.
> > >
> > > > deferred로 설정하면 성능을 향상되지만 데이터 무결성을 위험에 노출시킬 수 있다.

```sql
BEGIN;
SET CONSTRAINTS ALL DEFERRED;
-- SET CONSTRAINTS ALL IMMEDIATE;
-- SET CONSTRAINTS email DEFERRED;
COMMIT;
```
