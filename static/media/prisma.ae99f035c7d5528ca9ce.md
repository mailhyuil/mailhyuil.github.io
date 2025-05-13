# prisma

## install

```sh
npm i -D prisma
npm i @prisma/client
```

## init

> schema.prisma 파일 생성

```sh
npx prisma init
```

## schema.prisma

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = "mysql://<admin>:<password>@localhost:3306/mydb" // admin, password 입력
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

## migration

> 테이블 생성 및 업데이트

```sh
npx prisma migrate dev --name init
```

## PrismaClient 를 service로 주입하기

> PrismaClient를 서비스로 구현하여 사용
>
> > prisma.service.ts

```ts
import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
```

## PrismaModule 생성 전역으로 사용하기

```ts
import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

## prisma 환경변수 읽기

```sh
"migrate:dev": "dotenv -e ../.env.development -- npx prisma migrate dev",
```
