# prisma migrate .env 파일 읽기

> 기본으로 .env 파일을 읽음

## 다른 .env파일 읽게하기

```sh
npx dotenv -e .env.development -- npx prisma migrate dev
```
