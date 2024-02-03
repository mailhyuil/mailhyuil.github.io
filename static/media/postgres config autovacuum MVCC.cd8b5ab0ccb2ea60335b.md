# postgres MVCC (Multi Version Concurrency Control)

> A single rows has multiple versions.
>
> > 하나의 행에 여러 버전이 존재한다.

```sql
INSERT INTO users VALUES ('name', 'email@gmail.com')
ON CONFLICT DO NOTHING;

-- dead tuple 삭제
VACUUM users;
VACUUM FULL users;
```
