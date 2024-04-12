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
  authStore = inject(AuthStore);
  toastService = inject(ToastService);
  router = inject(Router);
  cookieService = inject(CookieService);
  authApi = inject(AuthService);

  handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      const status: number = error.status;
      const message: string = error.error.message;

      if (status === 0) {
        this.toastService.openDanger("서버에 연결할 수 없습니다.");
      }
      if (status === 400) {
        this.handleBadRequest(message);
      }
      if (status === 401) {
        this.handleUnauthorized(message);
      }
      if (status === 403) {
        this.handleForbidden(message);
      }
      if (status === 404) {
        this.handleNotFound(message);
      }
      if (status === 409) {
        this.handleConflict(message);
      }
      if (status === 429) {
        this.handleTooManyRequests(message);
      }
      if (status === 498) {
        this.handleInvalidToken(message);
      }
      if (status === 500) {
        this.handleInternalServerError(message);
      }
    }
  }

  private async handleInvalidToken(message: string) {
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

  private async handleUnauthorized(message: string): Promise<void> {
    this.authStore.clearAuth();
    this.toastService.openDanger("로그인 후 이용해주세요.");
    this.router.navigateByUrl("/login");
  }

  private async handleForbidden(message: string): Promise<void> {
    this.toastService.openDanger(message);
  }

  private async handleBadRequest(message: string): Promise<void> {
    this.toastService.openDanger("처리할 수 없는 요청입니다.");
  }

  private async handleNotFound(message: string): Promise<void> {
    this.toastService.openDanger(message);
  }

  private async handleConflict(message: string): Promise<void> {
    this.toastService.openDanger(message);
  }

  private async handleTooManyRequests(message: string): Promise<void> {
    this.toastService.openDanger(message);
  }

  private async handleInternalServerError(message: string): Promise<void> {
    this.toastService.openDanger("서버에서 문제가 발생했습니다.");
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
