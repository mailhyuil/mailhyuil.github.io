# prisma

## install

```
npm i prisma --save-dev
```

## CLI

```
npx prisma
```

## init

> schema.prisma 파일 생성

```
npx prisma init
```

## schema.prisma

```
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

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

## db 연결

```
npx prisma migrate dev --name init
```

## prisma 환경변수 읽기

```
"migrate:dev": "dotenv -e ../.env.development -- npx prisma migrate dev",
```

## @prisma/client

```
npm install @prisma/client
```

## script파일 생성 후 실행

> script.ts 파일의 쿼리를 읽고 실행시킨다

### script.ts

```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```
