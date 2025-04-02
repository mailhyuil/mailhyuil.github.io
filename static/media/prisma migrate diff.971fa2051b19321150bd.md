# prisma migrate diff

## use shadow db

```sh
# db push로 변경된 migrate 파일을 생성
prisma migrate diff \
--from-migrations prisma/migrations \
--to-schema-datasource prisma/schema.prisma \
--shadow-database-url <url_to_any_empty_pg_database>  \
--script >  prisma/migrations/<new_migration>/migration.sql
```

## use up-to-date schema

```sh
prisma migrate diff \
 --from-schema-datasource prisma/schema.prisma \
 --to-schema-datamodel prisma/schema.prisma \
 --script > ./down.sql
```

## apply

```sh
npx prisma migrate resolve --applied <new_migration>
```
