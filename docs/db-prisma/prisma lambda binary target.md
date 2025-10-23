# prisma lambda binary target

## schema.prisma

```prisma
generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "rhel-openssl-3.0.x"]
  // native: 로컬 개발 환경
  // rhel-openssl-3.0.x: AWS Lambda 환경
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// 나머지 모델들...
```

## generate

```sh
npx prisma generate # Prisma Client 생성
ls node_modules/.prisma/client/ # 바이너리 포함되었는지 확인
du -sh node_modules/.prisma/client/ # 번들 크기 확인 (Lambda 250MB 제한)
# 생성된 .prisma 폴더안에 prisma client 등이 포함되어 있음
```
