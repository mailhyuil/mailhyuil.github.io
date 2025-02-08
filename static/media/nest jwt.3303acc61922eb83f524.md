# nestjs jwt

> [jwt.io](https://jwt.io/)
>
> > [randomkeygen](https://randomkeygen.com/)

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
