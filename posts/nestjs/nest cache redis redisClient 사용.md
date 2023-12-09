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
        url: "redis://172.18.10.11:6379",
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

@Module({
  providers: [...redisProvider],
  exports: [...redisProvider],
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
import { Inject } from "@nestjs/common";
import { RedisClientType } from "redis";
import REDIS_CLIENT from "./redis.provider";

@Injectable()
export class RedisService {
  constructor(
    @Inject(REDIS_CLIENT)
    private readonly redis: RedisClientType
  ) {}

  get(key: string) {
    return this.redis.get(key);
  }
  set(key: string, value: any) {
    return this.redis.set(key, value);
  }
  del(key: string) {
    return this.redis.del(key);
  }
  ping() {
    return this.redis.ping();
  }
}
```
