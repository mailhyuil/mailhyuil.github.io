# angular sentry

> sentry 회원가입 후 설정

## install

```sh
npm i @sentry/angular
```

## main.ts

```ts
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";
import * as Sentry from "@sentry/angular";

Sentry.init({
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

> 전역 ErrorHandler에 등록해주거나 GlobalErrorHandler가 이미 있다면 그 안에서 처리

```ts
import { ApplicationConfig, ErrorHandler, inject, provideAppInitializer } from "@angular/core";
import { Router } from "@angular/router";

import * as Sentry from "@sentry/angular";

export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler(),
    },
  ],
};
```

```ts
import { isPlatformBrowser } from "@angular/common";
import { ErrorHandler, inject, Injectable, Injector, PLATFORM_ID } from "@angular/core";
import type { ModalService } from "@mailhyuil/ng-libs/modal";
import type { ToastService } from "@mailhyuil/ng-libs/toast";
import * as Sentry from "@sentry/angular";
import { UserFriendlyError } from "./user-friendly.error";
@Injectable({
  providedIn: "root",
})
export class FinalErrorHandler implements ErrorHandler {
  injector = inject(Injector);
  toastService?: ToastService;
  modalService?: ModalService;
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  sentryErrorHandler = Sentry.createErrorHandler();
  constructor() {
    if (this.isBrowser) {
      window.addEventListener("error", e => {
        this.handleError(e.error);
        e.preventDefault();
      });
      window.addEventListener("unhandledrejection", async e => {
        this.handleError(e.reason);
        e.preventDefault();
      });
    }
  }

  async handleError(error: Error): Promise<void> {
    const { ToastService } = await import("@mailhyuil/ng-libs/toast");
    const { ModalComponent, ModalService } = await import("@mailhyuil/ng-libs/modal");
    if (!this.toastService) this.toastService = this.injector.get(ToastService);
    if (!this.modalService) this.modalService = this.injector.get(ModalService);
    if (error instanceof UserFriendlyError) {
      const message = error.message;
      if (message.includes("\n") || message.length > 25) {
        this.modalService.create({
          component: ModalComponent,
          componentProps: {
            title: "🚨 알림",
            content: message,
            format: "text",
          },
        });
      } else {
        this.toastService.openDanger(error.message);
      }
    }
    console.error(error);
    this.sentryErrorHandler.handleError(error);
  }
}
```
