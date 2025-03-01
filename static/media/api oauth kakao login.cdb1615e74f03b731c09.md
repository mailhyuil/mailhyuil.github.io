# api oauth kakao login

## login.component.ts

```ts
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { environment } from "../../environment";
declare const Kakao: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export default class LoginComponent {
  loginWithKakao() {
    Kakao.Auth.authorize({
      redirectUri: environment.KAKAO_REDIRECT_URI,
      scope: "account_email,gender,openid", // opendid 반드시 추가 (인증을 위한 토큰을 받기 위함)
    });
  }
}
```

## login-redirect.component.ts

```ts
import { CommonModule, isPlatformServer } from "@angular/common";
import { Component, OnInit, PLATFORM_ID, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs";
import { ToastService } from "../../../services/toast.service";
import { AuthStore } from "../../../store/auth.store";
import { AuthApiService } from "../auth-api.service";

@Component({
  selector: "app-login-redirect",
  templateUrl: "./login-redirect.component.html",
  styleUrls: ["./login-redirect.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export default class LoginRedirectComponent implements OnInit {
  authApi = inject(AuthApiService);
  store = inject(AuthStore);
  route = inject(ActivatedRoute);
  router = inject(Router);
  platformId = inject(PLATFORM_ID);
  toastService = inject(ToastService);
  ngOnInit(): void {
    const code = this.route.snapshot.queryParams["code"];
    if (code) {
      if (isPlatformServer(this.platformId)) return;
      this.authApi
        .loginByKakao(code)
        .pipe(switchMap(() => this.authApi.getAuth()))
        .subscribe(auth => {
          if (auth) {
            this.store.setAuth(auth);
            this.router.navigate(["/"], {
              replaceUrl: true,
            });
            this.toastService.openSuccess("로그인 되었습니다.");
          }
        });
    }
  }
}
```

## auth.service.ts (SERVER)

```ts
export class AuthService {
  async loginByKakao(data: LoginByKakaoDTO) {
    let kakaoAccessToken;
    let kakaoRefreshToken;
    const kakaoRequest$ = this.http
      .post(
        "https://kauth.kakao.com/oauth/token",
        {
          code: data.code,
          grant_type: "authorization_code",
          redirect_uri: process.env["KAKAO_REDIRECT_URI"],
          client_id: process.env["KAKAO_REST_API_KEY"],
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        },
      )
      .pipe(
        map(response => ({
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
        })),
        switchMap(({ accessToken, refreshToken }) => {
          kakaoAccessToken = accessToken;
          kakaoRefreshToken = refreshToken;
          return this.http.get("https://kapi.kakao.com/v2/user/me", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          });
        }),
        map(response => response.data),
        catchError(e => {
          console.error(e);
          throw new UnauthorizedException("인증에 실패하였습니다.");
        }),
      );

    const kakaoProfile = await lastValueFrom(kakaoRequest$);

    let user = await this.prisma.authentication
      .findFirst({
        where: {
          provider: "KAKAO",
          providerId: kakaoProfile.id + "",
        },
      })
      .user();

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          name: kakaoProfile.kakao_account.kakaoProfile.nickname,
          email: kakaoProfile.kakao_account.email,
          roles: {
            set: ["MEMBER"],
          },
          authentications: {
            create: {
              provider: "KAKAO",
              providerId: kakaoProfile.id + "",
            },
          },
        },
      });
    } else {
      const updated = await this.prisma.authentication.update({
        where: {
          provider: "KAKAO",
          providerId: kakaoProfile.id + "",
        },
        data: {
          accessToken: kakaoAccessToken,
          refreshToken: kakaoRefreshToken,
        },
      });
    }

    const jwtAccessToken = await this.createAccessToken(user);
    const jwtXAccessToken = await this.createXAccessToken();
    const jwtRefreshToken = await this.createRefreshToken(user);
    const jwtXRefreshToken = await this.createXRefreshToken();
    return {
      accessToken: jwtAccessToken,
      refreshToken: jwtRefreshToken,
      xAccessToken: jwtXAccessToken,
      xRefreshToken: jwtXRefreshToken,
    };
  }
}
```
