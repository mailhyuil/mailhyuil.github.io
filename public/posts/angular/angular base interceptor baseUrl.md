# angular base interceptor baseUrl

## interceptor

```ts
import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `${process.env.BASE_URL}/${req.url}` });
    return next.handle(apiReq);
  }
}
```

## app.module.ts

```ts
{
  provide: HTTP_INTERCEPTORS,
  useClass: BaseUrlInterceptor,
  multi: true,
}
```
