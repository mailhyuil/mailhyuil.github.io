# angular ssr cookie httpOnly

## server.ts에서 req를 provider로 주입

```ts
commonEngine
  .render({
    bootstrap,
    documentFilePath: indexHtml,
    url: `${protocol}://${headers.host}${originalUrl}`,
    publicPath: browserDistFolder,
    providers: [
      { provide: APP_BASE_HREF, useValue: baseUrl },
      { provide: REQUEST, useValue: req },
      { provide: RESPONSE, useValue: res },
    ],
  })
  .then((html) => res.send(html))
  .catch((err) => next(err));
```

## interceptor에서 cookie를 header로 변경

> cookie는 set할 수 없다

```ts
import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { REQUEST } from "../../express.token";
export function ServerApiInterceptorFn(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const request = inject(REQUEST, { optional: true });
  if (!request) return next(req);

  const Authorization = request?.cookies["Authorization"];
  const RefreshToken = request?.cookies["RefreshToken"];

  const apiReq = req.clone({
    withCredentials: true,
    setHeaders: {
      Authorization,
      RefreshToken,
    },
  });

  return next(apiReq);
}
```

## API server의 AuthGuard에서 cookie가 없으면 header에서 찾기

```ts
const req: Request = context.switchToHttp().getRequest();
const cookies = req.cookies;
const headers = req.headers;
const token = cookies["Authorization"] || headers.authorization;
```

## app init 시 request객체와 Authorization cookie가 있을 때만 getProfile 요청

> init시에는 global error handler를 사용하지 않도록 처리해주기

```ts
{
    provide: APP_INITIALIZER,
    useFactory: () => {
    const authStore = inject(AuthStore);
    const platformId = inject(PLATFORM_ID);
    const request = inject(REQUEST, { optional: true });
    const http = inject(HttpClient);
    const router = inject(Router);
    const context = new HttpContext().set(APP_INIT, true);
    return () => {
        if (
        router.url.includes('oauth-redirect-url') || // oauth의 redirect url이거나
        (isPlatformServer(platformId) && // 서버에서
        (!request || // request가 없거나
        request.cookies['Authorization'])) // Authorization cookie가 없으면
        )
        return;

        return http
        .get<UserDto>(environment.BASE_URL + '/api/v1/auth', {
            context,
        })
        .pipe(
            catchError(() => {
            authStore.clearAuth();
            return EMPTY;
            }),
            tap((profile) => authStore.setAuth(profile))
        );
    };
    },
    multi: true,
},
```
