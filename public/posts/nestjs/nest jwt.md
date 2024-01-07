# nestjs jwt

> [jwt.io](https://jwt.io/)
>
> > [randomkeygen](https://randomkeygen.com/)

## jwt 구조

> secret을 사용하면 마지막 verify signature 부분만 바뀐다.
>
> > 즉 jwt.io 같은 사이트에서 header와 payload는 항상 확인이 가능하다.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.           <-- header /// 알고리즘, 타입
eyJpZCI6MSwidXNlcm5hbWUiOiJjb2RlZ2VhciIsImlhdC  <-- payload /// 데이터
I6MTY0MzUxOTI2MCwiZXhwIjoxNjQzNTE5NTYwfQ.       <-- payload
jxsk2FtHsRRhoAZrsUDgHaHOLCxI9IlSMKTrkZ0zUl4     <-- verify signature /// secret을 사용하여 생성되는 랜덤한 값
```

## install

```sh
npm i @nestjs/jwt
```

## .env

```sh
JWT_ACCESS_TOKEN_SECRET=VERY_SECRET_ACCESS_TOKEN
JWT_ACCESS_TOKEN_EXPIRATION_TIME=1h
JWT_REFRESH_TOKEN_SECRET=VERY_SECRET_REFRESH_TOKEN
JWT_REFRESH_TOKEN_EXPIRATION_TIME=30d
```

## auth.module.ts

```ts
@Module({
  imports: [
    JwtModule.register({
      global: true,
      useFactory: () => ({
        // default config
        secret: process.env.JWT_SECRET_KEY,
        signOptions: { expiresIn: "7d" },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
```

## AuthService

```ts
@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService, private readonly jwtService: JwtService) {}
  createAccessToken(payload: any): string {
    return this.jwtService.sign(payload, {
      secret: process.env["JWT_ACCESS_TOKEN_SECRET"],
      expiresIn: process.env["JWT_ACCESS_TOKEN_EXPIRATION_TIME"],
    });
  }
  createRefreshToken(payload: any): string {
    return this.jwtService.sign(payload, {
      secret: process.env["JWT_REFRESH_TOKEN_SECRET"],
      expiresIn: process.env["JWT_REFRESH_TOKEN_EXPIRATION_TIME"],
    });
  }
  verifyAccessToken(token: string): any {
    return this.jwtService.verify(token, {
      secret: process.env["JWT_ACCESS_TOKEN_SECRET"],
    });
  }
  verifyRefreshToken(token: string): any {
    return this.jwtService.verify(token, {
      secret: process.env["JWT_REFRESH_TOKEN_SECRET"],
    });
  }
}
```
