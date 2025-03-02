# nest cache-manager CacheInterceptor

> 자동으로 캐싱하는 방법
>
> > @Get() 메소드에만 적용됨
> >
> > > @Res() 를 사용하면 적용되지 않음

## usage

```ts
import { Module } from "@nestjs/common";
import { CacheModule, CacheInterceptor } from "@nestjs/cache-manager";
import { AppController } from "./app.controller";
import { APP_INTERCEPTOR } from "@nestjs/core";

@Module({
  imports: [
    CacheModule.register({
      ttl: 5, // seconds
      max: 10, // maximum number of items in cache
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
