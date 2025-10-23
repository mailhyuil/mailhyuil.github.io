# prisma extension soft-delete

## install

```sh
npm i prisma-extension-soft-delete
```

## usage

```ts
import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { createSoftDeleteExtension } from "prisma-extension-soft-delete";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: process.env.NODE_ENV === "production" ? ["error"] : ["info", "warn", "error"],
    });
  }
  async onModuleInit() {
    this.$extends(
      createSoftDeleteExtension({
        models: {
          User: true,
          Class: true,
          //   Post: {
          //     field: "deleted",
          //     createValue: Boolean,
          //   },
        },
        defaultConfig: {
          field: "deletedAt",
          createValue: deleted => {
            if (deleted) return new Date();
            return null;
          },
          // allowToOneUpdates: true, // deletedAt 된 레코드의 관계 엔티티를 업데이트할 수 있도록 허용
          // allowCompoundUniqueIndexWhere: true, // deletedAt 된 레코드의 복합 유니크 인덱스에서 삭제된 레코드를 허용
        },
      }),
    );
    await this.$connect();
  }
}
```
