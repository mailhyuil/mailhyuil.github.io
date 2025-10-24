# nest passport oauth

> https 환경에서만 정상적으로 테스트가 가능하다
>
> > https 환경이 아니라면 ngrok 을 사용해서 (http를 https환경으로 바꾼 url을 준다) 테스트 하자!

## install

```sh
npm i passport
npm i @nestjs/passport

# local
npm i passport-local
npm i -D @types/passport-local

# kakao
npm i passport-kakao
npm i -D @types/passport-kakao

# google
npm i passport-google-oauth
npm i -D @types/passport-google-oauth

# facebook
npm i passport-facebook
npm i -D @types/passport-facebook
# etc
```

## strategy 생성

> 생성된 strategy를 module의 providers에 등록

```ts
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
```

## guard 사용

```ts
import { Controller, Request, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller()
export class AppController {
  @UseGuards(AuthGuard("local"))
  @Post("auth/login")
  async login(@Request() req) {
    return req.user;
  }
}
```
