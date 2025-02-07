# nest oauth passport

> https 환경에서만 정상적으로 테스트가 가능하다
>
> > https 환경이 아니라면 ngrok 을 사용해서 (http를 https환경으로 바꾼 url을 준다) 테스트 하자!

## install

```sh
npm i passport
npm i @nestjs/passport

# jwt
npm i @nestjs/jwt
npm i passport-jwt
npm i -D @types/passport-jwt
```

## strategy 생성

> 생성된 strategy를 module의 providers에 등록

```ts
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { jwtConstants } from "./constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
```

## guard 사용

```ts
import { Controller, Request, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller()
export class AppController {
  @UseGuards(AuthGuard("jwt"))
  @Post("auth/login")
  async login(@Request() req) {
    return req.user;
  }
}
```
