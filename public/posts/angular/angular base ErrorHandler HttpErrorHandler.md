# angular ErrorHandler HttpErrorHandler

> httpClient에서 발생하는 에러를 잡아서 처리하는 핸들러

## http-error.interceptor.ts

> HttpErrorResponse는 앵귤러에서 제공하는 에러 객체이다. (Error를 상속하지 않는다.)

```ts
return next(apiReq).pipe(
  catchError(error => {
    if (error instanceof HttpErrorResponse) {
      httpErrorHandler.handleError(error);
    }
    throw error;
  }),
);
```

## http-error.handler.ts

```ts
import { ErrorMessage, ToastService } from "@/common";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { switchMap } from "rxjs";
import { AuthApiService } from "../services/auth-api.service";
import { UserApiService } from "../services/user-api.service";
import { AuthStore } from "../stores/auth.store";
import { UserFriendlyError } from "./user-friendly.error";

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
export class HttpErrorHandler implements ErrorHandler {
  authStore = inject(AuthStore);
  toastService = inject(ToastService);
  router = inject(Router);
  cookieService = inject(CookieService);
  authApi = inject(AuthApiService);
  userApi = inject(UserApiService);

  handleError(httpError: HttpErrorResponse) {
    const status: number = httpError.status;
    const error: any = httpError.error;
    const response = isJsonString(error) ? JSON.parse(error) : error;

    if (status === 0) {
      this.toastService.openDanger("서버에 연결할 수 없습니다.");
      return;
    }

    if (status === 401) {
      this.handleUnauthorized();
      return;
    }

    if (status === 498) {
      this.handleInvalidToken();
      return;
    }

    throw new UserFriendlyError(
      ErrorMessage[response.error.code] ||
        response.error.message ||
        response.message ||
        "알 수 없는 오류가 발생했습니다.",
    );
  }

  private async handleInvalidToken() {
    this.authStore.clearAuth();
    this.authApi
      .getAccessTokenByRefreshToken()
      .pipe(switchMap(() => this.userApi.me()))
      .subscribe(user => {
        if (user) {
          this.authStore.setAuth(user);
        }
      });
  }

  private async handleUnauthorized(): Promise<void> {
    this.authStore.clearAuth();
    this.toastService.openDanger("사용 권한이 없습니다. 다시 로그인해주세요.");
    this.router.navigateByUrl("/login");
  }
}
```

## error-message.ts

```ts
export const ErrorMessage: Record<number, string> = {
  1001: "유저의 정보를 찾을 수 없습니다.",
  1002: "이미 존재하는 유저입니다.",
  1003: "공지사항을 찾을 수 없습니다.",
  1004: "공지사항 생성에 실패했습니다.",
  1005: "공지사항 수정에 실패했습니다.",
  1006: "배너를 찾을 수 없습니다.",
  1007: "배너 생성에 실패했습니다.",
  1008: "배너 수정에 실패했습니다.",
  1009: "배너의 순서를 변경하는데 실패했습니다.",
  // PrismaException으로 잡지 못한 에러 처리
  9998: "데이터베이스 작업 중 예기치 않은 오류가 발생했습니다. 문제가 지속되면 개발자에게 문의하세요.",
};
```
