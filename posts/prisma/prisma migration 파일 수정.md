# prisma 마이그레이션 파일

## 생성

```sh
npx prisma migrate dev --name 파일이름 --create-only
```

## 파일 수정

```sql
# example
ALTER TABLE "Profile"
RENAME COLUMN "biograpy" TO "biography"
```

## 적용

```sh
npx prisma migrate dev
```
