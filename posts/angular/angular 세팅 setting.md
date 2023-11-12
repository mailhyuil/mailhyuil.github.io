# angular 세팅 setting

## appConfig.ts

```ts
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { PreloadAllModules, provideRouter, withPreloading } from "@angular/router";
import { ApiConfiguration } from "api/src/lib/api-configuration";
import { ApiModule } from "./../../../../api/src/lib/api.module";
import { appRoutes } from "./app.routes";
import { NgxsModule } from "@ngxs/store";

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
    importProvidersFrom([ApiModule, ApiConfiguration, NgxsModule.forRoot([UserState]), { provide: ErrorHandler, useClass: GlobalErrorHandler }]),
  ],
};
```
