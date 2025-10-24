# nest cache node-redis

> CacheModule을 사용하면 외부 저장소로 redis를 사용할 수 있지만 사용할 수 있는 메소드가 한정되어 있다.
>
> > redisClient를 직접 사용하면 CacheModule에서 제공하지 않는 메소드를 사용할 수 있다.

## install

```sh
# node-redis 설치
npm i redis
```

## redis.provider.ts

```ts
import { createClient } from "redis";
export type RedisClient = ReturnType<typeof createClient>;
export const REDIS_CLIENT = Symbol("REDIS_CLIENT");

export const RedisProvider = {
  provide: REDIS_CLIENT,
  useFactory: async () => {
    const client = createClient({
      url: process.env["REDIS_URL"], // "redis://localhost:6379"
    });

    // set config
    // client.expire('key', 60);
    // ...

    await client.connect();
    return client;
  },
};
```

## redis.module.ts

```ts
import { Module } from "@nestjs/common";
import { RedisProvider, REDIS_CLIENT } from "./redis.provider";
import { RedisClientType } from "redis";
import { OnModuleDestroy } from "@nestjs/common/interfaces";
import { Inject } from "@nestjs/common";
import { Global } from "@nestjs/common";
import { RedisService } from "./redis.service";

@Global()
@Module({
  providers: [RedisProvider],
  exports: [RedisProvider],
})
export class RedisModule implements OnModuleDestroy {
  constructor(@Inject(REDIS_CLIENT) private readonly redis: RedisClientType) {}

  onModuleDestroy() {
    this.redis.quit();
  }
}
```

## app.module.ts

```ts
@Module({
  imports: [RedisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## app.controller.ts

```ts
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject(REDIS_CLIENT) private readonly redis: RedisClientType) {}

  @Get()
  async getData() {
    const cache = await this.redis.get("key");
    if (cache) return cache;

    const res = await this.appService.getData();

    this.redis.set("key", JSON.stringify(res));
    return res;
  }
}
```
