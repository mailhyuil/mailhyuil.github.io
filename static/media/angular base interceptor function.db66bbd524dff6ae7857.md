# angular interceptor function

## 구현

```ts
import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

export function HttpInterceptorFn(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const clonedRequest = req.clone({
    withCredentials: true,
  });
  return next(clonedRequest).pipe();
}
```

## app.config.ts

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideHttpClient(withInterceptors([HttpInterceptorFn]))],
};
```
