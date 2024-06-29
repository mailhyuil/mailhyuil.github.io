# angular 세팅 setting

## appConfig.ts

```ts
import { ApplicationConfig, importProvidersFrom, APP_INITIALIZER } from "@angular/core";
import { PreloadAllModules, provideRouter, withPreloading } from "@angular/router";
import { ApiConfiguration } from "api/src/lib/api-configuration";
import { ApiModule } from "./../../../../api/src/lib/api.module";
import { appRoutes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withPreloading(PreloadAllModules),
      withInMemoryScrolling({
        scrollPositionRestoration: "top",
      })
    ),
    provideHttpClient(withInterceptors([HttpInterceptor])),
    importProvidersFrom([ApiModule, ApiConfiguration]),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: APP_INITIALIZER,
      useFactory: AuthFactory,
      multi: true,
    },
  ],
};
```
