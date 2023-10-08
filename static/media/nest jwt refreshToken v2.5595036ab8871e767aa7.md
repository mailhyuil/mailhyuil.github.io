# nest jwt refreshToken

> Refresh Header를 이용해 새 Refresh Token을 클라이언트에 전달
>
> > RefreshToken은 데이터베이스에 저장되어 무효화 가능

## env

```sh
JWT_ACCESS_TOKEN_SECRET=asdfasdf
JWT_ACCESS_TOKEN_EXPIRATION_TIME=30
JWT_REFRESH_TOKEN_SECRET=fdafdsasdf
JWT_REFRESH_TOKEN_EXPIRATION_TIME=30
```

## UserService

```js
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma:PrismaService){}
  async setCurrentRefreshToken(refreshToken: string, userId: number) {
    const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.usersRepository.update(userId, {
      currentHashedRefreshToken
    });
    this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: currentHashedRefreshToken }
    })
  }
}
```

## AuthService

```js
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/users.service';
import TokenPayload from './tokenPayload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public getCookieWithJwtAccessToken(userId: number) {
    const payload: TokenPayload = { userId };
    const token = this.jwtService.sign(payload, {
      secret: process.env['JWT_ACCESS_TOKEN_SECRET'],
      expiresIn: `${process.env['JWT_ACCESS_TOKEN_EXPIRATION_TIME']}s`
    });
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${process.env['JWT_ACCESS_TOKEN_EXPIRATION_TIME']}`;
  }

  public getCookieWithJwtRefreshToken(userId: number) {
    const payload: TokenPayload = { userId };
    const token = this.jwtService.sign(payload, {
      secret: process.env['JWT_REFRESH_TOKEN_SECRET'],
      expiresIn: `${process.env['JWT_REFRESH_TOKEN_EXPIRATION_TIME']}s`
    });
    const cookie = `Refresh=${token}; HttpOnly; Path=/; Max-Age=${process.env['JWT_REFRESH_TOKEN_EXPIRATION_TIME']}`;
    return {
      cookie,
      token
    }
  }
}
```

## AuthController

```js
import {
  Req,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  ClassSerializerInterceptor, UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './authentication.service';
import RequestWithUser from './requestWithUser.interface';

@Controller('authentication')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}
  @UseGuards(AuthGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser) {
    const {user} = request;
    const accessTokenCookie = this.authService.getCookieWithJwtAccessToken(user.id);
    const refreshTokenCookie = this.authService.getCookieWithJwtRefreshToken(user.id);
    await this.usersService.setCurrentRefreshToken(refreshToken, user.id);
    request.res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);
    return user;
  }
}
```
