# nest jwt refreshToken database

> Refresh Header를 이용해 새 Refresh Token을 클라이언트에 전달
>
> > RefreshToken은 데이터베이스에 저장되어 무효화 가능

## env

```sh
JWT_ACCESS_TOKEN_SECRET=VERY_SECRET_ACCESS_TOKEN
JWT_ACCESS_TOKEN_EXPIRATION_TIME=3600 # 1시간
JWT_REFRESH_TOKEN_SECRET=VERY_SECRET_REFRESH_TOKEN
JWT_REFRESH_TOKEN_EXPIRATION_TIME=2592000 # 30일
```

## UserService

```js
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma:PrismaService){}
  async setCurrentRefreshToken(refreshToken: string, userId: string) {

    const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);

    this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: currentHashedRefreshToken }
    })
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
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Auth()
  @Post('login')
  async login(@Body() body: LoginDto, @GetUser() user: User, @Res() res: Response) {
    const accessTokenCookie = this.authService.getCookieWithJwtAccessToken(user.id);
    const refreshTokenCookie = this.authService.getCookieWithJwtRefreshToken(user.id);
    await this.usersService.setCurrentRefreshToken(refreshToken, user.id);
    res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);
    return user;
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

## guard

```ts
import { Injectable, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  canActivate(context: ExecutionContext) {
    // 추가적인 인증 로직을 적용할 수 있습니다.
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    // 에러 처리를 위한 로직을 추가할 수 있습니다.
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }

  getRequest(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    return request;
  }

  getTokenFromCookie(request: any): string | null {
    if (request && request.cookies) {
      return request.cookies["Authentication"];
    }
    if
    return null;
  }

  getRefreshTokenFromCookie(request: any): string | null {
    if (request && request.cookies) {
      return request.cookies["Refresh"];
    }
    return null;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = this.getRequest(context);
    const token = this.getTokenFromCookie(request);
    if (!token) {
      const refreshToken = this.getRefreshTokenFromCookie(request);
      if (!refreshToken) {
        return false;
      }
    }

    // JWT 검증을 수행하고 유효한지 확인하는 로직
    request.jwtToken = token; // 옵션: 요청에 토큰을 저장할 수 있습니다.

    return true;
  }
}
```
