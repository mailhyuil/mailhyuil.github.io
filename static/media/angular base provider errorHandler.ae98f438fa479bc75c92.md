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
import { ErrorHandler, Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@lcrs/api";
import { CookieService } from "ngx-cookie-service";
import { switchMap } from "rxjs";
import { AuthStore } from "../store/auth.store";
import { ToastService } from "./toast.service";

@Injectable({
  providedIn: "root",
})
export class GlobalErrorHandler implements ErrorHandler {
  router = inject(Router);
  authApi = inject(AuthService);
  authStore = inject(AuthStore);
  toastService = inject(ToastService);
  cookieService = inject(CookieService);

  handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      const status: number = error.status;
      const message: string = error.error.message;

      if (status === 0) {
        this.toastService.openDanger("서버에 연결할 수 없습니다.");
      }
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
      if (status === 409) {
        this.handleConflict();
      }
      if (status === 429) {
        this.handleTooManyRequests();
      }
      if (status === 498) {
        this.handleInvalidToken();
      }
      if (status === 500) {
        this.handleInternalServerError();
      }

      if (process.env.NODE_ENV !== "production") {
        console.error(`[${status}] ${message}`);
      }
    }
  }

  private async handleInvalidToken() {
    this.authStore.clearAuth();
    this.authApi
      .authControllerGetAccessTokenByRefreshToken()
      .pipe(switchMap(() => this.authApi.authControllerGetAuth()))
      .subscribe((user) => {
        if (user) {
          this.authStore.setAuth(user);
        }
      });
  }

  private async handleBadRequest(): Promise<void> {
    this.toastService.openDanger("요청이 잘못되었습니다, 확인 후 다시 시도해주세요.");
  }

  private async handleNotFound(): Promise<void> {
    this.toastService.openDanger("존재하지 않는 리소스를 요청했습니다.");
  }

  private async handleUnauthorized(): Promise<void> {
    this.authStore.clearAuth();
    this.toastService.openDanger("로그인 후 이용해주세요.");
    this.router.navigateByUrl("/login");
  }

  private async handleForbidden(): Promise<void> {
    this.toastService.openDanger("권한이 없습니다.");
  }

  private async handleConflict(): Promise<void> {
    this.toastService.openDanger("이미 존재하는 리소스입니다.");
  }

  private async handleTooManyRequests(): Promise<void> {
    this.toastService.openDanger("너무 많은 요청을 보냈습니다. 잠시 후 다시 시도해주세요.");
  }

  private async handleInternalServerError(): Promise<void> {
    this.toastService.openDanger("서버에서 문제가 발생했습니다.");
  }
}
```

## AppModule

```ts
@NgModule({
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
})
class AppModule {}
```
