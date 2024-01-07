# nestjs jwt

[jwt.io](https://jwt.io/)

## RandomKeygen

[randomkeygen](https://randomkeygen.com/)

## jwt 구조

```
{
    "accessToken":
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.           <-- header
     eyJpZCI6MSwidXNlcm5hbWUiOiJjb2RlZ2VhciIsImlhdC  <-- payload
     I6MTY0MzUxOTI2MCwiZXhwIjoxNjQzNTE5NTYwfQ.       <-- payload
     jxsk2FtHsRRhoAZrsUDgHaHOLCxI9IlSMKTrkZ0zUl4"    <-- verify signature
}
```

## install

```sh
npm i --save @nestjs/jwt
```

## .env

```sh
JWT_ACCESS_TOKEN_SECRET=VERY_SECRET_ACCESS_TOKEN
JWT_ACCESS_TOKEN_EXPIRATION_TIME=3600 # 1시간
JWT_REFRESH_TOKEN_SECRET=VERY_SECRET_REFRESH_TOKEN
JWT_REFRESH_TOKEN_EXPIRATION_TIME=2592000 # 30일
```

## auth.module.ts

```ts
@Module({
  imports: [
    JwtModule.register({
      global: true,
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
  createAccessToken(payload: any, options?: SignOptions): string {
    return this.jwtService.sign(payload, {
      ...options,
      secret: process.env["JWT_ACCESS_TOKEN_SECRET"],
      expiresIn: process.env["JWT_ACCESS_TOKEN_EXPIRATION_TIME"],
    });
  }
  createRefreshToken(payload: any, options?: SignOptions): string {
    return this.jwtService.sign(payload, {
      ...options,
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
