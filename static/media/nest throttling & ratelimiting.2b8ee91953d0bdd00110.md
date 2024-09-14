# nest throttling & ratelimiting

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

## nginx

```conf
location /api/v1/ {
    proxy_set_header  X-Forwarded-For $remote_addr;
    proxy_pass http://server:3000;
}
```

## main.ts

```ts
app.set("trust proxy", true);
```

## proxy guard

> proxy 서버를 사용할 경우 proxy ip가 아닌 origin ip를 추출하여 사용
>
> > 반드시 request header에 `X-Forwarded-For`를 사용하여 origin ip를 추출해야 함

```ts
@Injectable()
export class ThrottlerBehindProxyGuard extends ThrottlerGuard {
  protected getTracker(req: Record<string, any>): Promise<string> {
    const originIp = req.ips.length ? req.ips[0] : req.ip;
    return originIp; // individualize IP extraction to meet your own needs
  }
}
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
