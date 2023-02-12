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

## nest에서 jwt 사용하기

### install

```
npm i --save @nestjs/jwt
```

## Jwt 옵션에 환경변수 적용

```ts
JwtModule.registerAsync({
  useClass: EnvironmentService,
}),
```

```ts
@Injectable()
export class EnvironmentService implements JwtOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createJwtOptions(): JwtModuleOptions {
    return {
      secret: this.configService.get<string>("JWT_SECRET_KEY"),
      publicKey: this.configService.get<string>("JWT_PUBLIC_KEY"),
      privateKey: this.configService.get<string>("JWT_PRIVATE_KEY"),
    };
  }
}
```

## JwtService

```ts
const token = jwtService.sign(object);
```
