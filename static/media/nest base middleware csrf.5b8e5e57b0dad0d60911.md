# nest middleware csrf

## CsrfMiddleware

```ts
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export class CsrfMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    res.cookie("XSRF-TOKEN", req["csrfToken"]());
    next();
  }
}
```

## app.module.ts

```ts
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(csurf({ cookie: true }), CsrfMiddleware).forRoutes("*");
  }
}
```

## angular interceptor

```ts
import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { CookieService } from "ngx-cookie";

export function CsrfInterceptorFn(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const cookieService = inject(CookieService);
  const csrfToken = cookieService.get("XSRF-TOKEN");
  const clonedRequest = req.clone({
    setHeaders: {
      "X-XSRF-TOKEN": csrfToken!,
    },
    withCredentials: true,
  });
  return next(clonedRequest).pipe();
}
```
