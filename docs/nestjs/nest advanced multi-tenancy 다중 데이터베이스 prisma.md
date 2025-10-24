# nest advanced multi-tenancy 다중 데이터베이스 prisma

> PrismaService를 durable provider로 설정하여, 테넌트 식별자에 따라 다른 데이터 소스를 사용하게 한다.
>
> > 현재까지는 prisma는 multi-data source를 지원하지 않는다. mixin을 통해 구현하자.

## prisma.service.ts

```ts
import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable({
  scope: Scope.REQUEST,
  durable: true,
})
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(@Inject(REQUEST) req: Request) {
    super({
      datasources: {
        db: {
          url: process.env[`DATABASE_URL_${req.tenantId}`],
        },
      },
    });
  }
  async onModuleInit() {
    await this.$connect();
  }
}
```
