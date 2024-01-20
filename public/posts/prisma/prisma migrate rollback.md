# prisma migrate rollback

```sh
# down migration 파일 생성
prisma migrate diff
# down migration 파일을 db에서 실행
prisma db execute --file down.sql
# migrate resolve로 rollback 적용
prisma migrate resolve --rolled-back <migration_name>
```
