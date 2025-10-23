# prisma migrate rename field

```sh
# schema에서 field 이름 변경 후

prisma migrate dev --create-only # migration.sql 생성

# migration.sql 변경
ALTER TABLE "users"
RENAME COLUMN "name" TO "username";

prisma migrate dev # 적용
```
