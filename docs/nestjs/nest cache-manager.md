# nest cache in-memory

> cache-manager는 기본으로 in-memory 캐시를 사용한다.
>
> > 높은 캐시 성능 및 확장성이 필요해질 때, redis, memcached 등의 외부 캐시 서버를 사용할 수 있다.
> >
> > > 만약 nestjs 서버를 여러개 운영한다면 redis를 사용해서 캐시를 공유해야 한다.

## install

```sh
npm i @nestjs/cache-manager
npm i cache-manager

# redis 사용 시
# 버전 호환성을 위해 각각의 버전을 설치해야 한다.
npm i @nestjs/cache-manager
npm i cache-manager@^4.0.0 # 4.0.0
npm i redis@^3.0.0 # 3.0.0
npm i cache-manager-redis-store@^2.0.0 # 2.0.0
```

## usage

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
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
```

### usage

```ts
constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

@UseInterceptors(CacheInterceptor)

@CacheTTL(5)
@CacheKey("key")
```
