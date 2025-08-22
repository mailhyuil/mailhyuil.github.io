# prisma middleware soft delete

```ts
import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // soft delete
    this.$use(async (params, next) => {
      // model이 Class 또는 User이고
      if (params.model === "Class" || params.model === "User") {
        // action이 delete이면
        if (params.action == "delete") {
          params.action = "update"; // action을 update로 변경
          if (params.model === "User") {
            params.args["data"] = { deletedAt: new Date(), status: "INACTIVE" }; // data에 deletedAt: new Date(), status: "INACTIVE" 추가
          } else {
            params.args["data"] = { deletedAt: new Date(), status: "DELETED" };
          }
        }
        // action이 deleteMany이면
        if (params.action == "deleteMany") {
          params.action = "updateMany"; // action을 updateMany로 변경
          if (params.args.data != undefined) {
            params.args.data["deletedAt"] = new Date();
            if (params.model === "User") {
              params.args.data["status"] = "INACTIVE";
            } else {
              params.args.data["status"] = "DELETED";
            }
          } else {
            if (params.model === "User") {
              params.args["data"] = {
                deletedAt: new Date(),
                status: "INACTIVE",
              };
            } else {
              params.args["data"] = {
                deletedAt: new Date(),
                status: "DELETED",
              };
            }
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
    });
    await this.$connect();
  }
}
```
