# nest auth jwt

> [jwt.io](https://jwt.io/)
>
> > [randomkeygen](https://randomkeygen.com/)
> >
> > > jwt의 payload는 단순 base64로 인코딩되어 있기 때문에 민감한 정보를 넣으면 안된다.
> > >
> > > > 그러나 signature는 secret을 사용하기 때문에 검증 가능하다.

## jwt의 목적

> jwt의 핵심은 상태를 클라이언트가 가지고 있다는 것이다.
>
> > database에서 유저의 정보를 가져오지 않아도 되기 때문에 (session 방식) 서버의 부하를 줄일 수 있다.
> >
> > > 따라서 user의 정보는 데이터베이스에서 조회하지말고 verify된 payload에서 가져와야한다.
> > >
> > > > refresh token 조회, blacklist 조회도 rdbs가 아닌 메모리 db에서 조회하면 더 부하를 줄일 수 있다.

## jwt 구조

> secret을 사용하면 마지막 verify signature 부분만 바뀐다.
>
> > 즉 jwt.io 같은 사이트에서 header와 payload는 항상 확인이 가능하다.

```sh
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.           # header /// 알고리즘, 타입
eyJpZCI6MSwidXNlcm5hbWUiOiJjb2RlZ2VhciIsImlhdC  # payload /// 데이터
I6MTY0MzUxOTI2MCwiZXhwIjoxNjQzNTE5NTYwfQ.       # payload
jxsk2FtHsRRhoAZrsUDgHaHOLCxI9IlSMKTrkZ0zUl4     # verify signature /// secret을 사용하여 생성되는 랜덤한 값
```

## install

```sh
npm i @nestjs/jwt
```

## .env

```sh
JWT_ACCESS_TOKEN_SECRET=VERY_SECRET_ACCESS_TOKEN
JWT_ACCESS_TOKEN_EXPIRES_IN=1h
JWT_REFRESH_TOKEN_SECRET=VERY_SECRET_REFRESH_TOKEN
JWT_REFRESH_TOKEN_EXPIRES_IN=30d
```

## access-token.module.ts

```ts
import { Global, Module, OnModuleInit } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AccessTokenService } from "./token.token";

const secret = process.env["JWT_ACCESS_TOKEN_SECRET"];
const expiresIn = process.env["JWT_ACCESS_TOKEN_EXPIRES_IN"];

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret,
      signOptions: { expiresIn },
      global: true,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: AccessTokenService,
      useExisting: JwtService,
    },
  ],
  exports: [AccessTokenService],
})
export class AccessTokenModule implements OnModuleInit {
  onModuleInit() {
    if (!secret) {
      throw new Error("JWT_ACCESS_TOKEN_SECRET 환경변수가 정의되지 않았습니다.");
    }
    if (!expiresIn) {
      throw new Error("JWT_ACCESS_TOKEN_EXPIRES_IN 환경변수가 정의되지 않았습니다.");
    }
  }
}
```

## refresh-token.module.ts

```ts
import { Global, Module, OnModuleInit } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { RefreshTokenService } from "./token.token";

const secret = process.env["JWT_REFRESH_TOKEN_SECRET"];
const expiresIn = process.env["JWT_REFRESH_TOKEN_EXPIRES_IN"];

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret,
      signOptions: { expiresIn },
      global: true,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: RefreshTokenService,
      useExisting: JwtService,
    },
  ],
  exports: [RefreshTokenService],
})
export class RefreshTokenModule implements OnModuleInit {
  onModuleInit() {
    if (!secret) {
      throw new Error("JWT_REFRESH_TOKEN_SECRET 환경변수가 정의되지 않았습니다.");
    }
    if (!expiresIn) {
      throw new Error("JWT_REFRESH_TOKEN_EXPIRES_IN 환경변수가 정의되지 않았습니다.");
    }
  }
}
```

## app.module.ts

```ts
@Module({
  imports: [AccessTokenModule, RefreshTokenModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
```
