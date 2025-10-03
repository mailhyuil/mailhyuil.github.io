# nest csrf

> samesite=strict 옵션으로 막을 수 있지만 구식 브라우저에서는 동작하지 않는다
>
> > 크로스 사이트 리퀘스트 변조(cross site request forgery, CSRF)
> >
> > > 피해자의 권한으로 피해자 모르게 해커가 요청을 수행 하도록 만드는 것을 의미
> > >
> > > > 특히 "결재"와 관련된 웹 어플리케이션에서는 필수이며 가장 강력한 수준의 조치가 요구 됩니다.
> > > >
> > > > > post, put, delete 등의 요청을 보낼 때는 csrf 토큰을 함께 보내야 합니다.

## 토큰 보내는 방식

> Important: Request must be sent with withCredentials set to true to allow cookies to be sent from the frontend or credentials set to include in fetch API.
>
> > "서버"와 "클라이언트" 둘다 credential을 true로 허용해줘야 프론트 엔드에서 쿠키에 인증 토큰을 담아 보낼 수 있다.
> > CORS origin을 정확히 설정해주어야 한다.

```sh
# headers
csrf-token
xsrf-token
x-csrf-token
x-xsrf-token

# query
?_csrf=token;

# body
{
  _csrf: token;
}
```

## csurf library

> 쿠키에 \_csrf 시크릿을 담아서 클라이언트로 보냄
>
> > req.csrfToken()로 그 시크릿에 대한 토큰을 생성할 수 있게 해줌
> >
> > > 토큰을 클라이언트에 보내고 POST 요청할 시 다시 X-XSRF-TOKEN 헤더에 담아서 보내기

## install

```sh
# server
npm i cookie-parser
npm i csurf

# client
npm i ngx-cookie
```

## app.module.ts

```ts
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(csurf({ cookie: true }), CsrfMiddleware).forRoutes("*");
  }
}
```

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

## angular interceptor

```ts
import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { CookieService } from "ngx-cookie";

export function CsrfInterceptorFn(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const cookieService = inject(CookieService);
  const csrfToken = cookieService.get("XSRF-TOKEN");
  if (!csrfToken) return next(req).pipe();

  const clonedRequest = req.clone({
    setHeaders: {
      "X-XSRF-TOKEN": csrfToken!,
    },
    withCredentials: true,
  });
  return next(clonedRequest).pipe();
}
```
