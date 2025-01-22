# prisma migrate dev init

```sh
mkdir -p prisma/migrations/init
npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/init/migration.sql
npx prisma migrate resolve --applied init
npx prisma migrate dev # it should say everything is in sync
```
