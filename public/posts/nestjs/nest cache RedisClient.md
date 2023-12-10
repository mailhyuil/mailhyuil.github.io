# nest cache redis redisClient 사용

> CacheModule을 사용하면 외부 저장소로 redis를 사용할 수 있지만 사용할 수 있는 메소드가 한정되어 있다.
>
> > redisClient를 직접 사용하면 CacheModule에서 제공하지 않는 메소드를 사용할 수 있다.

## install

```sh
npm i redis
```

## redis.provider.ts

```ts
import { createClient } from "redis";
export type RedisClient = ReturnType<typeof createClient>;
export const REDIS_CLIENT = Symbol("REDIS_CLIENT");

export const redisProvider = [
  {
    provide: REDIS_CLIENT,
    useFactory: async () => {
      const client = createClient({
        url: "redis://localhost:6379",
      });
      await client.connect();
      return client;
    },
  },
];
```

## redis.module.ts

```ts
import { Module } from "@nestjs/common";
import { redisProvider } from "./redis.provider";
import { RedisClientType } from "redis";
import { OnModuleDestroy } from "@nestjs/common/interfaces";
import { Inject } from "@nestjs/common";
import { REDIS_CLIENT } from "./redis.provider";
import { Global } from "@nestjs/common";
import { RedisService } from "./redis.service";

@Global()
@Module({
  providers: [redisProvider, RedisService],
  exports: [RedisService],
})
export class RedisModule implements OnModuleDestroy {
  constructor(@Inject(REDIS_CLIENT) private readonly redis: RedisClientType) {}

  onModuleDestroy() {
    this.redis.quit();
  }
}
```

## redis.service.ts

```ts
import { Inject, Injectable } from "@nestjs/common";
import { REDIS_CLIENT, RedisClient } from "./redis.provider";

@Injectable()
export class RedisService {
  constructor(
    @Inject(REDIS_CLIENT)
    private readonly redis: RedisClient
  ) {}

  get(key: string) {
    return this.redis.get(key);
  }

  async set(key: string, value: any, ttl?: number) {
    const res = await this.redis.set(key, value); /// 성공: OK, 실패: null
    this.redis.expire(key, ttl || 10); /// default 10 seconds /// expire는 set 이후에 실행되어야 함
    return res;
  }

  mGet(keys: string[]) {
    return this.redis.mGet(keys);
  }

  mSet(keyValues: string[]) {
    return this.redis.mSet(keyValues);
  }

  hGet(key: string, field: string) {
    return this.redis.hGet(key, field);
  }

  hSet(key: string, field: string, value: any) {
    return this.redis.hSet(key, field, value);
  }

  hDel(key: string, field: string) {
    return this.redis.hDel(key, field);
  }

  del(key: string) {
    return this.redis.del(key);
  }

  ping() {
    return this.redis.ping();
  }
}
```
