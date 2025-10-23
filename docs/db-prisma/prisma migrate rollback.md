# prisma migrate rollback

```sh
# down migration 파일 생성
prisma migrate diff \
 --from-schema-datasource prisma/schema.prisma \
 --to-schema-datamodel prisma/schema.prisma \
 --script > ./down.sql

# down migration 파일을 db에서 실행
prisma db execute --file ./down.sql

# migration folder 생성 down.sql 파일을 이동 (migration.sql로 변경)
mkdir ./prisma/migrations/$(date +%Y%m%d%H%M%S)_rollback

# apply
prisma migrate resolve --applied <migration_name>

# failed migration인 경우
# migrate resolve로 rollback 적용
prisma migrate resolve --rolled-back <migration_name>
```
