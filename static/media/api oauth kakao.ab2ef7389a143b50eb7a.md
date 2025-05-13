# oauth-kakao

1. 앱 생성
2. 동의 항목 설정
3. 카카오 로그인 활성화, OpenID Connect 활성화
4. 앱키 -> REST API 키 또는 Javascript 키 (네이티브 앱 키) 환경 변수로 설정
   > REST API 키는 공개되면 안된다 (REST API로 사용)
   >
   > > Javascript 키는 공개되어도 상관없다 (Javascript SDK를 사용할 때 사용)
5. Redirect URL 설정
   > 사용자가 로그인에 성공했을 때 리디렉션 시킬 "클라이언트"의 URL
   >
   > > REDIRECT_URL?code=fdhttfdhft6ht 코드 형식으로 리다이렉트 된다.
   > >
   > > > querystring으로 code를 받아서 서버에 로그인 또는 회원가입 요청 (REST API 사용)
   > > >
   > > > > 또는 SDK를 사용하여 회원 정보만 서버에 요청. (Javascript SDK 사용)
6. 서버에서 받은 코드를 이용해서 카카오 인증 서버에 회원 정보 요청
7. 카카오 인증 서버에서 회원 정보를 받아서 서버에서 로그인 또는 회원가입 처리

## REST API vs SDK

> SDK를 사용해서 구현하면 간편 로그인을 구현할 수 있고
>
> > REST API를 사용해서 구현하면 더 많은 정보를 받아올 수 있다.

## client

### index.html

```html
<head>
  <script
    src="https://t1.kakaocdn.net/kakao_js_sdk/2.2.0/kakao.min.js"
    integrity="sha384-x+WG2i7pOR+oWb6O5GV5f1KN2Ko6N7PTGPS7UlasYWNxZMKQA63Cj/B2lbUmUfuC"
    crossorigin="anonymous"
  ></script>
  <script>
    Kakao.init(""); // 사용하려는 앱의 JavaScript 키 입력
  </script>
</head>
```

### login.page.ts (REST API 사용)

```ts
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IconComponent } from "angular-libs";

declare const Kakao: any; // 카카오 객체 불러오기

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  constructor() {}
  login() {
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/auth/kakao/callback",
    });
  }
}
```

### login.page.ts (Javascript SDK 사용)

```js
export class JoinPage implements OnInit {
  JAVASCRIPT_API_KEY = "50284f7f25fb25ad3f69339c6c605149";

  ngOnInit(): void {
    Kakao.init(this.JAVASCRIPT_API_KEY);
    console.log(Kakao.isInitialized());
  }

  KaKaoLoginAPI(): void {
    Kakao.Auth.login({
      success: () => {
        Kakao.API.request({
          url: "/v2/user/me",
          success: (res: any) => {
            console.log("성공 : ", res);
          },
          fail: (err: any) => {
            alert(`개인정보를 가져올 수 없습니다. ${JSON.stringify(err)}`);
          },
        });
      },
      fail: (err: any) => {
        alert(`도메인을 확인해주세요. ${JSON.stringify(err)}`);
      },
    });
  }
}
```

### app.routes.ts

```ts
{
    path: '/auth/kakao/callback',
    data: {
    title: '카카오 로그인 콜백 URL',
    },
    loadComponent: () =>
    import('./pages/login/kakao/callback.page').then((m) => m.CallbackPage),
},
```

### callback.page.ts

> querystring의 code를 받아서 서버에 요청

```ts
async sendCode(){
    const code = this.route.snapshot.queryParams.code;
    if(!code) return;
    const response = await lastValueFrom(this.httpService.post('http://localhost:4200/api/v1/user/oauth', {code}))
    console.log(response);
}
```

## server

## axios 설정

### install

```ts
npm i --save @nestjs/axios axios
```

### module

```ts
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  providers: [UserService],
})
export class UserModule {}
```

### user/oauth

```ts
  constructor(
    private readonly userService: UserService,
    private readonly httpService: HttpService
  ) {}

  @Get('oauth')
  async oauth(@Query('code') code: string) {
    if (!code || typeof code !== 'string')
      throw new BadRequestException('code is required');

    const url = 'https://kauth.kakao.com/oauth/token';

    const data = {
      grant_type: 'authorization_code',
      client_id: '7ce0584576ca0egd07474f14933101b6072', // REST API KEY
      redirect_uri: 'http://localhost:3000/auth/kakao/callback', // Redirect URI 똑같이
      code,
    };

    const headers = {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    };

    const response = await lastValueFrom(
      this.httpService.post(url, data, { headers })
    );

    const { access_token, token_type, refresh_token, expires_in, scope } =
      response.data;

    const userInfo = await lastValueFrom(
      this.httpService.post('https://kapi.kakao.com/v2/user/me', data, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      })
    );

    console.log(userInfo);

    const user = this.userService.createOrLogin({
      platform: 'kakao',
      platformUserId: userInfo.data.id,
    });

    return user;
  }
```

## 로그아웃

```ts
 kakaoLogout() {
    Kakao.Auth.logout()
      .then(function() {
        alert('logout ok\naccess token -> ' + Kakao.Auth.getAccessToken());
        deleteCookie();
      })
      .catch(function() {
        alert('Not logged in');
      });
    // 쿠키삭제
  }
```
