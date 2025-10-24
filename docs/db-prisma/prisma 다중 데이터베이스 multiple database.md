# prisma database 분리

## prisma.schema

> 두개 생성
>
> > `prisma/<project-name-a>/prisma.schema`
> >
> > `prisma/<project-name-b>/prisma.schema`

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../../node_modules/@prisma/client/<project-name>"
}

datasource db {
  provider = "postgresql"
  url      = env("PROJECT_A_DATABASE_URL")
}
```

## prisma migrate & generate

> `node_modules/@prisma/client/<project-name>` 으로 prisma client가 생성됨

## service

```ts
import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient as ProjectAPrismaClient } from "@prisma/client/project-a";
import { PrismaClient as ProjectBPrismaClient } from "@prisma/client/project-b";

@Injectable()
export class ProjectAPrismaService extends ProjectAPrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

@Injectable()
export class ProjectBPrismaService extends ProjectBPrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
```

## module

```ts
import { Global, Module } from "@nestjs/common";
import { ProjectAPrismaClient, ProjectBPrismaClient } from "./prisma.service";

@Global()
@Module({
  providers: [ProjectAPrismaClient, ProjectBPrismaClient],
  exports: [ProjectAPrismaClient, ProjectBPrismaClient],
})
export class ProjectModule {}
```
