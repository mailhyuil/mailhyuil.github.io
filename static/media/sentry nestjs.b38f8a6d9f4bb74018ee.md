# nest sentry

> 에러 로그를 slack으로 전송하는 방법

## install

```sh
npm i @sentry/node
# npm i nest-raven
npm i @slack/client
```

## main.ts

```ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as Sentry from "@sentry/node";
import { WebhookInterceptor } from "./common/webhook.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // sentry init
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
  });
  await app.listen(3000);
}
bootstrap();
```

## error interceptor

> Sentry.captureException(error)를 통해 에러를 sentry로 전송

```ts
import { ExecutionContext, Injectable, NestInterceptor, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import * as Sentry from "@sentry/minimal";

@Injectable()
export class SentryInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(error => {
        Sentry.captureException(error);
        return null;
      }),
    );
  }
}
```
