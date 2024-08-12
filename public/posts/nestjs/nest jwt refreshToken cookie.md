# nest jwt refreshToken database

> Refresh Header를 이용해 새 Refresh Token을 클라이언트에 전달
>
> > RefreshToken은 데이터베이스에 저장되어 무효화 가능

## env

```sh
JWT_ACCESS_TOKEN_SECRET=VERY_SECRET_ACCESS_TOKEN
JWT_ACCESS_TOKEN_EXPIRATION_TIME=1h
JWT_REFRESH_TOKEN_SECRET=VERY_SECRET_REFRESH_TOKEN
JWT_REFRESH_TOKEN_EXPIRATION_TIME=30d
```

## auth.controller.ts

```js
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApiBody,
  ApiNoContentResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { type Request, type Response } from 'express';
import { LoginDTO } from './auth.dto';
import { AuthService } from './auth.service';
import { accessTokenOptions, refreshTokenOptions } from './cookie.options';

@ApiTags('Auth')
@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({
    summary: '로그인',
  })
  @ApiBody({ type: LoginDTO })
  @ApiNoContentResponse()
  async login(
    @Body() body: LoginDTO,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken, refreshToken, xAccessToken, xRefreshToken } =
      await this.authService.login(body);
    res.cookie('X-Authorization', xAccessToken, {
      ...accessTokenOptions,
    });
    res.cookie('X-RefreshToken', xRefreshToken, {
      ...refreshTokenOptions,
    });
    res.cookie('Authorization', accessToken, {
      ...accessTokenOptions,
      httpOnly: true,
    });
    res.cookie('RefreshToken', refreshToken, {
      ...refreshTokenOptions,
      httpOnly: true,
    });
  }

  @Get('logout')
  @ApiOperation({
    summary: '로그아웃',
  })
  @ApiNoContentResponse()
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('Authorization');
    res.clearCookie('X-Authorization');
    res.clearCookie('RefreshToken');
    res.clearCookie('X-RefreshToken');
  }

  @Get('refresh')
  @ApiOperation({
    summary: '토큰 재발급',
  })
  @ApiNoContentResponse()
  async getAccessTokenByRefreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshToken = req.cookies['RefreshToken'];
    const xRefreshToken = req.cookies['X-RefreshToken'];

    const result = await this.authService.getAccessTokenByRefreshToken(
      refreshToken,
      xRefreshToken,
    );

    if (result.ok === false) {
      res.clearCookie('Authorization');
      res.clearCookie('X-Authorization');
      res.clearCookie('RefreshToken');
      res.clearCookie('X-RefreshToken');
      if (result.error instanceof UnauthorizedException) {
        throw result.error;
      }
      throw result.error;
    }

    const { accessToken, xAccessToken } = result.value;

    res.cookie('Authorization', accessToken, {
      ...accessTokenOptions,
      httpOnly: true,
    });
    res.cookie('X-Authorization', xAccessToken, {
      ...accessTokenOptions,
    });
  }
}
```

## auth.service.ts

```js
import { UserNotFoundException } from '@/server/errors/exception';
import {
  Inject,
  Injectable,
  Logger,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'apps/server/src/prisma/prisma.service';
import bcrypt from 'bcryptjs';
import { plainToInstance } from 'class-transformer';
import { PrismaError } from 'prisma-error-enum';
import {
  GetAccessTokenByRefreshTokenResult,
  LoginDTO,
  LoginResponseDTO,
} from './auth.dto';
import { AccessTokenService, RefreshTokenService } from './token/token.token';
@Injectable()
export class AuthService implements OnModuleInit {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly prisma: PrismaService,
    @Inject(AccessTokenService)
    private readonly accessTokenService: JwtService,
    @Inject(RefreshTokenService)
    private readonly refreshTokenService: JwtService,
  ) {}

  onModuleInit() {
    this.initAdmin();
  }

  async initAdmin() {
    const username = process.env.ADMIN_USERNAME;
    if (!username) {
      throw new Error('ADMIN_USERNAME 환경변수가 정의되지 않았습니다.');
    }
    const password = process.env.ADMIN_PASSWORD;
    if (!password) {
      throw new Error('ADMIN_PASSWORD 환경변수가 정의되지 않았습니다.');
    }
    const found = await this.prisma.user.findFirst({
      where: {
        roles: {
          has: 'ADMIN',
        },
      },
    });
    if (!found) {
      await this.prisma.user.create({
        data: {
          username,
          password: bcrypt.hashSync(password),
          name: 'admin',
          birthDate: new Date(),
          roles: ['ADMIN'],
          tel: '010-0000-0000',
          authentications: {
            create: {
              provider: 'LOCAL',
            },
          },
        },
      });
      this.logger.log('Admin 계정 생성 완료');
    }
  }

  async login(data: LoginDTO) {
    const { username, password } = data;
    const res = await this.prisma.$transaction(async (tx) => {
      const found = await tx.user
        .findUniqueOrThrow({
          where: {
            username,
          },
          select: {
            id: true,
            password: true,
            authentications: {
              where: {
                provider: 'LOCAL',
              },
            },
          },
        })
        .catch((error) => {
          if (error.code === PrismaError.RecordsNotFound) {
            throw new UserNotFoundException({ username: data.username }, error);
          }
          throw error;
        });

      if (!bcrypt.compareSync(password, found.password)) {
        throw new UnauthorizedException('사용자 정보를 다시 확인해주세요.');
      }
      const accessToken = this.accessTokenService.sign({ id: found.id });
      const xAccessToken = this.accessTokenService.sign({ verified: true });
      const refreshToken = this.refreshTokenService.sign({ id: found.id });
      const xRefreshToken = this.refreshTokenService.sign({ verified: true });
      await tx.authentication.update({
        where: {
          userId: found.id,
          provider: 'LOCAL',
        },
        data: {
          accessToken,
          refreshToken: bcrypt.hashSync(refreshToken),
        },
      });
      return {
        accessToken,
        xAccessToken,
        refreshToken,
        xRefreshToken,
      };
    });
    return plainToInstance(LoginResponseDTO, res);
  }

  async getAccessTokenByRefreshToken(
    refreshToken: string,
    xRefreshToken: string,
  ): Promise<GetAccessTokenByRefreshTokenResult<UnauthorizedException>> {
    if (!refreshToken || !xRefreshToken) {
      return {
        ok: false,
        error: new UnauthorizedException('토큰이 존재하지 않습니다.'),
      };
    }
    // ! xRefreshToken 검증
    try {
      const payload = this.refreshTokenService.verify(xRefreshToken);
      if (!payload.verified) {
        return {
          ok: false,
          error: new UnauthorizedException('2차 토큰이 유효하지 않습니다.'),
        };
      }
    } catch (error) {
      this.logger.error(error);
      return {
        ok: false,
        error: new UnauthorizedException('2차 토큰이 유효하지 않습니다.'),
      };
    }
    // ! refreshToken 검증
    let payload;
    try {
      payload = this.refreshTokenService.verify(refreshToken);
    } catch (error) {
      return {
        ok: false,
        error: new UnauthorizedException('토큰이 유효하지 않습니다.', {
          cause: error,
        }),
      };
    }
    // ! payload.id로 유저 조회
    const user = await this.prisma.user.findUnique({
      where: { id: payload.id },
      select: {
        id: true,
        authentications: {
          where: {
            provider: 'LOCAL',
          },
          select: {
            refreshToken: true,
          },
        },
      },
    });

    if (!user) {
      return {
        ok: false,
        error: new UnauthorizedException('유저가 존재하지 않습니다.'),
      };
    }

    const userRefreshToken = user.authentications[0].refreshToken;
    if (!userRefreshToken) {
      return {
        ok: false,
        error: new UnauthorizedException(
          '유저의 리프레시 토큰이 존재하지 않습니다.',
        ),
      };
    }

    if (!bcrypt.compareSync(refreshToken, userRefreshToken)) {
      return {
        ok: false,
        error: new UnauthorizedException('토큰이 매칭되지 않았습니다.'),
      };
    }

    const accessToken = this.accessTokenService.sign({ id: user.id });
    const xAccessToken = this.accessTokenService.sign({ verified: true });
    return {
      ok: true,
      value: {
        accessToken,
        xAccessToken,
      },
    };
  }
}
```

## aut.guard.ts

```ts
import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request, Response } from "express";
import { ClsService } from "nestjs-cls";
import { PrismaService } from "../../../prisma/prisma.service";
import { InvalidTokenException } from "../auth.exception";
import { AccessTokenService } from "../token/token.token";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(AccessTokenService) private readonly accessToken: JwtService,
    private readonly prisma: PrismaService,
    private readonly cls: ClsService
  ) {}

  async canActivate(context: ExecutionContext) {
    const req: Request = context.switchToHttp().getRequest();
    const res: Response = context.switchToHttp().getResponse();
    const cookies = req.cookies;
    const token = cookies["Authorization"];
    const xToken = cookies["X-Authorization"];

    if (!xToken) {
      res.clearCookie("Authorization");
      res.clearCookie("X-Authorization");
      res.clearCookie("RefreshToken");
      res.clearCookie("X-RefreshToken");
      throw new InvalidTokenException();
    }

    try {
      const { verified } = this.accessToken.verify(xToken);
      if (!verified) {
        throw new InvalidTokenException();
      }
    } catch (error) {
      throw new InvalidTokenException();
    }

    if (!token) {
      throw new InvalidTokenException();
    }

    let id = "";
    try {
      const payload = this.accessToken.verify(token);
      if (!payload.id) {
        throw new InvalidTokenException();
      }
      id = payload.id;
    } catch (e) {
      throw new InvalidTokenException();
    }

    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new InvalidTokenException();
    }

    req["user"] = user;
    this.cls.set("user", user);

    return true;
  }
}
```
