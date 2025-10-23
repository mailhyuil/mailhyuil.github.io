# postgres transaction readonly

> optimizer 에게 이 transaction이 readonly라는 hint를 주어 더 효율적인 query plan을 생성하도록 한다.
>
> > 이 transaction 내에서는 INSERT, UPDATE, DELETE 등의 write 작업이 불가능하다.

```sql
BEGIN;
SET TRANSACTION READ ONLY;
```
