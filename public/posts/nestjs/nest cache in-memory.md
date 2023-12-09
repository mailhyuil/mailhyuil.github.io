# nest cache in-memory

> cache-manager는 기본으로 in-memory 캐시를 사용한다.
>
> > 높은 캐시 성능 및 확장성이 필요해질 때, redis, memcached 등의 외부 캐시 서버를 사용할 수 있다.
> >
> > > 만약 nestjs 서버를 여러개 운영한다면 redis를 사용해서 캐시를 공유해야 한다.

## install

```sh
npm i @nestjs/cache-manager cache-manager
```

## 사용

### app.module.ts

```ts
import { CacheModule, Module } from "@nestjs/common";
import { AppController } from "./app.controller";

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
```

### app.controller.ts

```ts
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";

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
