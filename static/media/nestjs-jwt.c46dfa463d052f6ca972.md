# nestjs jwt

[jwt.io](https://jwt.io/)

## jwt 구조

```
{
    "accessToken":
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. // header
     eyJpZCI6MSwidXNlcm5hbWUiOiJjb2RlZ2VhciIsImlhdC
     I6MTY0MzUxOTI2MCwiZXhwIjoxNjQzNTE5NTYwfQ. // payload
     jxsk2FtHsRRhoAZrsUDgHaHOLCxI9IlSMKTrkZ0zUl4" // verify signature
}
```

## nest에서 jwt 사용하기

### install

```
npm i --save @nestjs/jwt
```

### module 등록

```
import { JwtModule } from '@nestjs/jwt';

imports: [
    TypeOrmModule.forFeature([UserRepository]),
    JwtModule.register({
      secret: 'SECRET',
      signOptions: { expiresIn: '300s' },
    }),
 ],
```
