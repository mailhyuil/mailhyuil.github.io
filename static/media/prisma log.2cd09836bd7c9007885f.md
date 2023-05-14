# prisma log

> query, info, warn, error

```
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ log: ['query', 'info'] })

const prisma = new PrismaClient({
  log: [
    {
      emit: 'event', // prisma.$on('error', (e) => {console.log(e)}) 이런 식으로 받을 수 있게
      level: 'query',
    },
    {
      emit: 'stdout', // 콘솔에 찍히게
      level: 'info',
    },
    {
      emit: 'file', // file에 저장
      path: './prisma.log',
      level: 'warn',
    },
  ],
})
```

## nestjs에서

```ts
import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({ log: ["query"] });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on("beforeExit", async () => {
      await app.close();
    });
  }
}
```

> 또는

```ts
import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    this.$on("query", console.log);
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on("beforeExit", async () => {
      await app.close();
    });
  }
}
```
