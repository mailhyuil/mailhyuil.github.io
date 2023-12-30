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
    const apiReq = req.clone({ url: `${baseUrl}/${req.url}`, withCredentials: true });
    return next.handle(apiReq);
  }
}
```

## app.module.ts

```ts
{
  provide: HTTP_INTERCEPTORS,
  useClass: ApiInterceptor,
  multi: true,
}
```
