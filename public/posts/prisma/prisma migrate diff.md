# prisma migrate diff

```sh
# db push로 변경된 migrate 파일을 생성
prisma migrate diff \
--from-migrations prisma/migrations \
--to-schema-datasource prisma/schema.prisma \
--shadow-database-url <url-to-any-empty-pg-database>  \
--script >  prisma/migrations/add-comments-and-post/migration.sql
```
