# angular csrf

> HttpXsrfTokenExtractor로 XSRF 토큰을 추출하고,
>
> > HttpClientXsrfModule을 사용하여 X-XSRF-TOKEN 헤더를 설정합니다.

## 토큰 보내는 방식

> Important: Request must be sent with withCredentials set to true to allow cookies to be sent from the frontend or credentials set to include in fetch API.
>
> > 요청은 반드시 withCredentials를 true로 설정하여 프론트 엔드에서 쿠키를 보낼 수 있도록 하거나 fetch API에서 include를 설정해야 합니다.

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

## app.module.ts

> Now, any request sent from this component automatically sends the cookie XSRF-TOKEN as the default value and header as X-XSRF-TOKEN.
>
> > HttpClientXsrfModule을 사용하면 자동으로 X-XSRF-TOKEN 헤더를 설정해 줍니다.

```ts
imports: [
  HttpClientModule,
  HttpClientXsrfModule.withOptions({
    cookieName: "XSRF-Cookie",
    headerName: "XSRF-TOKEN",
  }),
];
```

## component.ts

```ts
@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {}
  intercept(req: HttpRequest, next: HttpHandler): Observable<HttpEvent> {
    let csrfToken = this.tokenExtractor.getToken() as string;

    const cookieHeaderName = "X-XSRF-TOKEN";
    if (csrfToken !== null && !req.headers.has(cookieHeaderName)) {
      req = req.clone({ headers: req.headers.set(cookieHeaderName, csrfToken) });
    }
    return next.handle(req);
  }
}
```
