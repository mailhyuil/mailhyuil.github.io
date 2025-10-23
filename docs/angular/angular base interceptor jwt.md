# angular jwt logic

1. login
2. 서버에서 accessToken 리턴
3. accessToken을 localStorage에 저장
4. 서버에 Request를 날릴 때마다 Interceptor가 localStorage에서 token을 꺼내 header에 저장 후 Request
5. auth 정보 GET Request
6. nest guard가 검증 및 auth 데이터 찾아서 리턴
7. 서버에서 리턴한 auth 데이터를 Store에 저장

## http-interceptor.service.ts

```ts
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { Observable, catchError, throwError } from "rxjs";
import { AdminStore } from "../store/auth.store";
import { ToastService } from "./toast.service";

@Injectable({
  providedIn: "root",
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private readonly toastService: ToastService, private readonly store: Store, private readonly router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem("accessToken");

    const request = req.clone({
      setHeaders: {
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    });

    return next.handle(request).pipe(
      catchError((e) => {
        const status: number = e.status;
        if (status === 498) {
          this.store.reset(AdminStore);
        } else if (status === 401) {
          this.store.reset(AdminStore);
          this.toastService.show(e.error.message, "danger");
        } else if (status !== 500) {
          this.toastService.show(e.error.message, "danger");
        }
        return throwError(() => new Error(e));
      })
    );
  }
}
```

## main.ts

```ts
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
```
