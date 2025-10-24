# prisma migration 파일 수정

## 생성

```sh
npx prisma migrate dev --name 파일이름 --create-only # 적용하지 않고 파일만 생성
```

## 파일 수정

```sql
ALTER TABLE "Profile"
RENAME COLUMN "biograpy" TO "biography"
```

## 적용

```sh
npx prisma migrate dev
```
