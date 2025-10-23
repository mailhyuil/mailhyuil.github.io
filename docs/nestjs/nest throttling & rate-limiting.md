# nest throttling & rate-limiting

> 토큰, 파라미터, 바디, 로직 등을 사용하여 rate limiting을 구현하기 위해서는 nestjs 레벨에서 구현해야한다.
>
> > 성능 또는 DDOS를 막기 위해서는 nginx 레벨에서 구현하는 것을 권장한다.
> >
> > (요청이 이미 nestjs로 들어왔기 때문에 서버의 부하가 생긴다.)

## install

```sh
npm i @nestjs/throttler
```

## app.module.ts

```ts
import { APP_GUARD } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        // default
        ttl: 60000,
        limit: 10,
      },
      {
        name: "short",
        ttl: 1000,
        limit: 3,
      },
      {
        name: "medium",
        ttl: 10000,
        limit: 20,
      },
      {
        name: "long",
        ttl: 100000,
        limit: 100,
      },
    ]),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
```

## @Throttle & @SkipThrottle

```ts
// Override default configuration for Rate limiting and duration.
@Throttle({ default: { limit: 3, ttl: 60000 } })
@Get()
findAll() {
}

// Skip rate limiting
@SkipThrottle()
@Get()
findAll() {
}
```
