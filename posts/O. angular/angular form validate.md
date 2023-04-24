# angular form validate

> ReactiveFormsModule을 import 해야함

## import

```ts
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
```

## html

```html
<section class="flex flex-col items-center justify-center w-full h-full gap-10">
  <h2 class="text-2xl font-bold">로그인</h2>
  <form
    [formGroup]="loginForm"
    class="flex flex-col gap-5 p-5 rounded-md max-w-[25rem] w-full"
  >
    <lepi-input-text
      label="이메일"
      class="w-full"
      formControlName="email"
      [required]="true"
    ></lepi-input-text>
    <lepi-input-text
      label="비밀번호"
      class="w-full"
      type="password"
      formControlName="password"
      [required]="true"
    ></lepi-input-text>
    <lepi-button [expand]="true" (click)="submit()">로그인</lepi-button>
  </form>
</section>
```

## ts

```ts
import { ButtonComponent, InputTextComponent } from "@team-lepisode/components";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { HttpService } from "packages/client/src/services/http.service";
import { ITokensDTO, IUserDTO } from "interface";
import { combineLatest, combineLatestWith, concatWith } from "rxjs";
import { Store } from "@ngxs/store";
import { SetUser } from "../../store/auth.store";
import { ToastService } from "../../services/toast.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    ButtonComponent,
  ],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl("admin@lepisode.team", [Validators.required]),
    password: new FormControl("admin", [Validators.required]),
  });

  constructor(
    private httpService: HttpService,
    private store: Store,
    private toastService: ToastService,
    private router: Router
  ) {}

  submit() {
    const body = this.loginForm.getRawValue();

    const getTokens$ = this.httpService.post<ITokensDTO>("auth", body);
    const getUser$ = this.httpService.get<IUserDTO>("auth");

    getTokens$.pipe(concatWith(getUser$)).subscribe((res) => {
      if (res) {
        if ("accessToken" in res) {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
        }

        if ("id" in res) {
          this.store.dispatch(new SetUser(res));
          this.toastService.show("로그인이 완료되었습니다.", "success");
          this.router.navigateByUrl("/admin");
        }
      }
    });
  }
}
```
