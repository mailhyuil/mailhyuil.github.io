# angular errorHandler

> 전역까지 에러가 퍼지면 프로그램이 멈춘다.
>
> > 에러를 catch해야 프로그램이 안 멈추고 계속 실행된다.

## ErrorHandler

> 전역 에러 핸들
>
> > HttpErrorResponse는 앵귤러에서 제공하는 커스텀 에러 객체이다.

```ts
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IAdminDTO } from "@cms/common";
import { Store } from "@ngxs/store";
import { lastValueFrom } from "rxjs";
import { AdminState, SetAdmin } from "../stores/admin.store";
import { HttpService } from "./http.service";
import { ToastService } from "./toast.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private readonly store: Store,
    private readonly httpService: HttpService,
    private readonly toastService: ToastService,
    private readonly router: Router,
    private readonly logger: Logger
  ) {}

  handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      const status: number = error.status;
      const message: string = error.error.message;
      if (status === 400) {
        this.handleBadRequest();
      }
      if (status === 401) {
        this.handleUnauthorized();
      }
      if (status === 403) {
        this.handleForbidden();
      }
      if (status === 404) {
        this.handleNotFound();
      }
      if (status === 498) {
        this.handleInvalidToken();
      }
      if (status === 500) {
        this.handleInternalServerError();
      }
    }
    this.logger.log(error); // 원본 에러를 로깅..
  }

  private async handleInvalidToken() {
    this.store.reset(AdminState);

    const refreshToken = localStorage.getItem("REFRESH_TOKEN_KEY");
    // refresh token이 없으면 로그인 페이지로 이동
    if (!refreshToken) {
      this.toastService.show("로그인 후 이용해주세요.");
      this.router.navigateByUrl("/login");
      return;
    }

    // refresh token이 있으면 refresh token으로 access token을 재발급 받는다.
    const { accessToken } = await lastValueFrom(
      this.httpService.get<{ accessToken: string }>("auth/refresh", {
        headers: {
          RefreshToken: `Bearer ${refreshToken}`,
        },
      })
    ).catch((error) => {
      this.toastService.show("로그인 후 이용해주세요.");
      this.router.navigateByUrl("/login");
      return { accessToken: null };
    });

    // 재발급 받은 access token이 있으면 local storage에 저장하고 admin 정보를 store에 저장한다.
    if (accessToken) {
      localStorage.setItem("ACCESS_TOKEN_KEY", accessToken);

      const admin = await lastValueFrom(this.httpService.get<IAdminDTO>("auth")).catch((error) => {
        this.toastService.show("로그인 후 이용해주세요.");
        this.router.navigateByUrl("/login");
        return null;
      });

      // admin 정보가 있으면 store에 저장한다.
      if (admin) {
        this.store.dispatch(new SetAdmin(admin));
      }
    }
  }

  private async handleUnauthorized(): Promise<void> {
    this.store.reset(AdminState);
    this.toastService.show("로그인 후 이용해주세요.", "danger");
    this.router.navigateByUrl("/login");
  }

  private async handleForbidden(): Promise<void> {
    this.toastService.show("사용 권한이 없습니다.");
  }
  private async handleBadRequest(): Promise<void> {
    this.toastService.show("처리할 수 없는 요청입니다.");
  }
  private async handleInternalServerError(): Promise<void> {
    this.toastService.show("서버에서 문제가 발생했습니다.");
  }
  private async handleNotFound(): Promise<void> {
    this.toastService.show("요청하신 리소스를 찾을 수 없습니다.");
  }
}
```

## HttpInterceptor

```ts
@Injectable({
  providedIn: "root",
})
export class HttpInterceptorImpl implements HttpInterceptor, OnDestroy {
  constructor(private readonly errorHandlerService: ErrorHandlerService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((e) => {
        this.errorHandlerService.handleError(e); // 에러 핸들러에게 에러를 넘긴다.
        return of();
      })
    );
  }
}
```

## AppModule

```ts
@NgModule({
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
})
class MyModule {}
```
