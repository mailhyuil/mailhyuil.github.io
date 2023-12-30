# angular errorHandler

> 전역까지 에러가 퍼지면 프로그램이 멈춘다.
>
> > 에러를 catch해야 프로그램이 안 멈추고 계속 실행된다.

## ErrorHandler

> 전역 에러 핸들

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
    private readonly router: Router
  ) {}

  handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      const status: number = error.status;
      if (status === 498) {
        this.handleInvalidToken();
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
      if (status === 500) {
        this.handleInternalServerError();
      }
      this.toastService.show(error.error.message, "danger");
    }
    console.error("Error from global error handler", error);
  }

  private async handleInvalidToken() {
    this.store.reset(AdminState);
    const refreshToken = localStorage.getItem("REFRESH_TOKEN_KEY");
    // refresh token이 없으면 로그인 페이지로 이동
    if (!refreshToken) {
      this.toastService.show("로그인을 해주세요.");
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
      this.toastService.show("로그인을 해주세요.");
      this.router.navigateByUrl("/login");
      return { accessToken: null };
    });
    // 재발급 받은 access token이 있으면 local storage에 저장하고 admin 정보를 store에 저장한다.
    if (accessToken) {
      localStorage.setItem("ACCESS_TOKEN_KEY", accessToken);

      const admin = await lastValueFrom(this.httpService.get<IAdminDTO>("auth")).catch((error) => {
        this.toastService.show("로그인을 해주세요.");
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

  private async handleForbidden(): Promise<void> {}
  private async handleBadRequest(): Promise<void> {}
  private async handleInternalServerError(): Promise<void> {}
}
```

## AppModule

```ts
@NgModule({
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
})
class MyModule {}
```
