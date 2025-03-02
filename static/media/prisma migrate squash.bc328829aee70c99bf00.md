# prisma migrate squash

## dev로 파일 생성

```sh
prisma migrate dev --name squashed_migrations
```

## prisma/migrations/0_squashed_migrations 폴더 생성

> 앞에 0을 붙여서 맨 첫번째의 마이그레이션으로 보이도록

## diff로 migration.sql 생성

```sh
prisma migrate diff \
 --from-empty \
 --to-schema-datamodel ./prisma/schema.prisma \
 --script > ./prisma/migrations/0_squashed_migrations/migration.sql
```

## resolve로 apply

```sh
prisma migrate resolve --applied 0_squashed_migrations
```
