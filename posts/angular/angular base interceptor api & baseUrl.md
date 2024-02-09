# angular base interceptor api & baseUrl

## interceptor

```ts
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const baseUrl = process.env.NX_BASE_URL;
    const apiReq = req.clone({ url: `${baseUrl}/${req.url}` });
    return next.handle(apiReq);
  }
}
```

## interceptor function

> provideHttpClient를 사용 시에는 아래와 같이 사용한다.

```ts
import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

export function ApiInterceptorFn(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const baseUrl = process.env.NX_BASE_URL;
  const apiReq = req.clone({
    url: `${baseUrl}/${req.url}`,
  });
  return next(apiReq).pipe();
}
```

## app.module.ts

```ts
{
  provide: HTTP_INTERCEPTORS,
  useClass: ApiInterceptor,
  multi: true,
}
/// provideHttpClient를 사용 시
provideHttpClient(withInterceptors([ApiInterceptorFn])),
```
