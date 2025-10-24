# nest base decorator toss nestjs-aop example

```ts
import { Inject } from "@nestjs/common";
import { RedisClientType } from "@redis/client";
import { Aspect, LazyDecorator, WrapParams, createDecorator } from "@toss/nestjs-aop";
import { MAX_POINT_ID } from "../app/max-point/max-point.service";
import { PrismaService } from "../prisma/prisma.service";
import { REDIS_CLIENT } from "../redis/redis.provider";

export const ADD_POINT = Symbol("ADD_POINT");

const createPointId = (userId: number) => `point:${userId}`;

@Aspect(ADD_POINT)
export class AddPointDecorator implements LazyDecorator<any, number> {
  constructor(private readonly prisma: PrismaService, @Inject(REDIS_CLIENT) private readonly redis: RedisClientType) {}
  wrap(params: WrapParams<any, number>) {
    const point = params.metadata;
    return async (...args: any) => {
      const res = await params.method(...args);
      // add point
      setTimeout(async () => {
        const totalPoint = await this.redis.get(createPointId(res.userId));
        const maxPoint = await this.redis.get(MAX_POINT_ID);
        if (!maxPoint) {
          throw new Error("Max Point is not set");
        }

        if (!totalPoint) {
          await this.prisma.user.update({
            where: {
              id: res.userId,
            },
            data: {
              point: {
                increment: point,
              },
            },
          });
          await this.redis.set(createPointId(res.userId), point);
          return;
        }

        if (+totalPoint <= +maxPoint) {
          await this.prisma.user.update({
            where: {
              id: res.userId,
            },
            data: {
              point: {
                increment: point,
              },
            },
          });
          await this.redis.incrBy(createPointId(res.userId), point);
          return;
        }
      });
      return res;
    };
  }
}

export const AddPoint = (point: number) => createDecorator(ADD_POINT, point);
```
