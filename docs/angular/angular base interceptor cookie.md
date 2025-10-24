# angular base interceptor cookie

> cookie는 set할 수 없다 header에 대신 set해라

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
