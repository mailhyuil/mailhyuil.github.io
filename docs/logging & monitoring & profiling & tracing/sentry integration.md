# sentry integration

> 에러, 예외, 성능 문제를 자동으로 감지하고 Sentry 서버로 전송해주는 기능
>
> > 특정 integration을 lazy load할 수 있는 기능도 제공

## main.ts

```ts
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";
import * as Sentry from "@sentry/angular";

Sentry.init({
  // data source name: 앱이 나의 Sentry서버와 통신하기 위해 사용하는 고유한 식별자
  dsn: "",
  sendDefaultPii: true,
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/dep\.team\/api/],
});
// lazy load integration
Sentry.lazyLoadIntegration("httpClientIntegration").then(httpClientIntegration => {
  Sentry.addIntegration(httpClientIntegration());
});

enableProdMode(); // production mode로 설정해야 sentry가 정상적으로 동작함
bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
```

## app.config.ts

```ts
import { APP_INITIALIZER, ApplicationConfig, ErrorHandler } from "@angular/core";
import { Router } from "@angular/router";
import * as Sentry from "@sentry/angular-ivy";
export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
};
```
