# nest base global

> main.ts에서 useGlobal~를 사용하면 application 단에서 global을 사용
>
> 이 방식은 module에 register된 외부 모듈에 대해서는 적용되지 않는다.
>
> > 따라서 AppModule에서 global token을 사용하여 등록해주자

```ts
import { BadRequestException, Module, ValidationPipe } from "@nestjs/common";
import { APP_FILTER, APP_PIPE } from "@nestjs/core";
import { AllExceptionsFilter } from "./filters/exception.filter";

import { APP_GUARD, APP_INTERCEPTOR, DiscoveryModule } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { ValidationError } from "class-validator";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CacheControlInterceptor } from "./interceptors/cache-control.interceptor";
import { EtagInterceptor } from "./interceptors/etag.interceptor";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";
@Module({
  imports: [
    PrismaModule,
    UsersModule,
    DiscoveryModule,
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
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheControlInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: EtagInterceptor,
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transformOptions: { enableImplicitConversion: true },
        transform: true,
        whitelist: true,
        enableDebugMessages: true,
        exceptionFactory: (errors: ValidationError[]) => {
          if (errors?.length > 0) {
            const children = errors[0].children;

            if (children?.length > 0) {
              const error = children[0].constraints;
              const keys = Object.keys(error);
              const type = keys[keys.length - 1];
              const message = error[type];
              return new BadRequestException(message);
            }

            const error = errors[0].constraints;
            const keys = Object.keys(error);
            const type = keys[keys.length - 1];
            const message = error[type];
            return new BadRequestException(message);
          }
        },
      }),
    },
  ],
})
export class AppModule {}
```
