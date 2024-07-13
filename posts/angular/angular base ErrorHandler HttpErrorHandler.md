# angular ErrorHandler HttpErrorHandler

> httpClient에서 발생하는 에러를 잡아서 처리하는 핸들러

## http-error.interceptor.ts

> HttpErrorResponse는 앵귤러에서 제공하는 에러 객체이다. (Error를 상속하지 않는다.)

```ts
return next(apiReq).pipe(
  catchError((error) => {
    if (error instanceof HttpErrorResponse) {
      httpErrorHandler.handleError(error);
    }
    throw error;
  })
);
```

## http-error-handler.ts

```ts
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { ToastService } from "@lcrs/common";
import { CookieService } from "ngx-cookie-service";
import { switchMap } from "rxjs";
import { AuthStore } from "../stores/auth.store";
import { AuthApiService } from "./auth-api.service";
import { UserApiService } from "./user-api.service";

function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

@Injectable({
  providedIn: "root",
})
export class HttpErrorHandler {
  authStore = inject(AuthStore);
  toastService = inject(ToastService);
  router = inject(Router);
  cookieService = inject(CookieService);
  authApi = inject(AuthApiService);
  userApi = inject(UserApiService);
  handleError(error: HttpErrorResponse) {
    const status: number = error.status;
    const message: string =
      typeof error.error === "object" ? error.error.message : isJsonString(error.error) ? JSON.parse(error.error).message : error.error;
    if (status === 0) {
      this.toastService.openDanger("서버에 연결할 수 없습니다.");
      return;
    }
    if (status === 400) {
      this.handleBadRequest(message);
      return;
    }
    if (status === 401) {
      this.handleUnauthorized(message);
      return;
    }
    if (status === 403) {
      this.handleForbidden(message);
      return;
    }
    if (status === 404) {
      this.handleNotFound(message);
      return;
    }
    if (status === 409) {
      this.handleConflict(message);
      return;
    }
    if (status === 429) {
      this.handleTooManyRequests(message);
      return;
    }
    if (status === 498) {
      this.handleInvalidToken(message);
      return;
    }
    if (status === 500) {
      this.handleInternalServerError(message);
      return;
    }
    this.handleUnknownError(message);
  }

  private async handleUnknownError(message: string) {
    this.toastService.openDanger(`알 수 없는 오류가 발생했습니다. : ${message}`);
  }

  private async handleInvalidToken(message: string) {
    this.authStore.clearAuth();
    this.authApi
      .getAccessTokenByRefreshToken()
      .pipe(switchMap(() => this.userApi.getMe()))
      .subscribe((user) => {
        if (user) {
          this.authStore.setAuth(user);
        }
      });
  }

  private async handleUnauthorized(message: string): Promise<void> {
    this.authStore.clearAuth();
    this.toastService.openDanger(message);
    this.router.navigateByUrl("/login");
  }

  private async handleForbidden(message: string): Promise<void> {
    this.toastService.openDanger(message);
  }

  private async handleBadRequest(message: string): Promise<void> {
    this.toastService.openDanger(message);
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
    this.toastService.openDanger(`서버에서 문제가 발생했습니다. : ${message}`);
  }
}
```
