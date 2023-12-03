# nest cache redis

> cache-manager는 기본으로 in-memory 캐시를 사용한다.
>
> > 높은 캐시 성능 및 확장성이 필요해질 때, redis, memcached 등의 외부 캐시 서버를 사용할 수 있다.

## install

```sh
npm i @nestjs/cache-manager cache-manager
```

## 사용

### app.module.ts

```ts
import type { RedisClientOptions } from "redis";
import * as redisStore from "cache-manager-redis-store";
import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { AppController } from "./app.controller";

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      store: redisStore,

      // Store-specific configuration:
      host: "localhost",
      port: 6379,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
```

### app.controller.ts

```ts
@Controller()
export class AppController {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}
  async findAll(): string {
    await this.cache.set("key", "value");
    const value = await this.cache.get("key");
    await this.cache.del("key");
    await this.cache.reset();
  }
}
```
