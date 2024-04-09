# prisma middleware

## prisma.middleware.ts

```ts
import { Prisma } from "@prisma/client";
import { PrismaService } from "./prisma.service";

export const classMiddlewareFn = (prisma: PrismaService) => {
  const classMiddleware: Prisma.Middleware<any> = async (params, next) => {
    if (params.model === "Class") {
      if (params.action == "delete") {
        const count = await prisma.classRegistration.count({
          where: {
            classId: params.args.where.id,
            status: "ACTIVE",
          },
        });

        if (count < 1) {
          return next(params);
        }

        params.action = "update";
        params.args["data"] = { deletedAt: new Date(), status: "DELETED" };
      }
      if (params.action == "deleteMany") {
        params.action = "updateMany";
        if (params.args.data != undefined) {
          params.args.data["deletedAt"] = new Date();
          params.args.data["status"] = "DELETED";
        } else {
          params.args["data"] = {
            deletedAt: new Date(),
            status: "DELETED",
          };
        }
      }
      if (
        params.action == "findUnique" ||
        params.action == "findMany" ||
        params.action == "findFirst" ||
        params.action === "findFirstOrThrow" ||
        params.action === "findUniqueOrThrow" ||
        params.action === "findRaw" ||
        params.action === "executeRaw" ||
        params.action === "queryRaw" ||
        params.action == "count" ||
        params.action == "aggregate" ||
        params.action === "groupBy"
      ) {
        params.args["where"]["deletedAt"] = null;
      }
    }
    return next(params);
  };
  return classMiddleware;
};

export const userMiddleware: Prisma.Middleware<any> = async (params, next) => {
  if (params.model === "User") {
    if (params.action == "delete") {
      params.action = "update";
      params.args["data"] = { deletedAt: new Date(), status: "INACTIVE" };
    }
    if (params.action == "deleteMany") {
      params.action = "updateMany";
      if (params.args.data != undefined) {
        params.args.data["deletedAt"] = new Date();
        params.args.data["status"] = "INACTIVE";
      } else {
        params.args["data"] = {
          deletedAt: new Date(),
          status: "INACTIVE",
        };
      }
    }
    if (
      params.action == "findUnique" ||
      params.action == "findMany" ||
      params.action == "findFirst" ||
      params.action === "findFirstOrThrow" ||
      params.action === "findUniqueOrThrow" ||
      params.action === "findRaw" ||
      params.action === "executeRaw" ||
      params.action === "queryRaw" ||
      params.action == "count" ||
      params.action == "aggregate" ||
      params.action === "groupBy"
    ) {
      params.args["where"]["deletedAt"] = null;
    }
  }
  return next(params);
};
```

## prisma.service.ts

```ts
import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { classMiddlewareFn, userMiddleware } from "./prisma.middleware";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // soft delete
    this.$use(userMiddleware);
    this.$use(classMiddlewareFn(this));
    await this.$connect();
  }
}
```
