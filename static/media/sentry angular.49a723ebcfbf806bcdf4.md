# angular sentry

> sentry 회원가입 후 설정

## install

```sh
npm i @sentry/angular-ivy
```

## main.ts

```ts
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import * as Sentry from "@sentry/angular-ivy";
import AppComponent from "./app/app.component";
import { appConfig } from "./app/app.config";

Sentry.init({
  dsn: "https://070dd918c72af996f9b21afac4c44f75@o4506312991506432.ingest.sentry.io/4506312993800192",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

enableProdMode(); // production mode로 설정해야 sentry가 정상적으로 동작함
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
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
