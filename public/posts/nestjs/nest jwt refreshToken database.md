# nest jwt refreshToken database

> Refresh Header를 이용해 새 Refresh Token을 클라이언트에 전달
>
> > RefreshToken은 데이터베이스에 저장되어 무효화 가능
> >
> > > AuthService에서는 UnauthorizedException을 던져서 클라이언트에게 재로그인을 요청

## env

```sh
JWT_ACCESS_TOKEN_SECRET=VERY_SECRET_ACCESS_TOKEN
JWT_ACCESS_TOKEN_EXPIRATION_TIME=1h
JWT_REFRESH_TOKEN_SECRET=VERY_SECRET_REFRESH_TOKEN
JWT_REFRESH_TOKEN_EXPIRATION_TIME=30d
```

## AuthController

```js
import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { AdminDTO } from '../admin/admin.dto';
import {
  LoginByEmailDTO,
  LoginByGoogleDTO,
  isLoginByEmailDTO,
  isLoginByGoogleDTO,
} from './auth.dto';
import { AuthService } from './auth.service';
import { Auth } from './decorators/auth.decorator';
import { GetAdmin } from './decorators/get-admin.decorator';

@ApiTags('인증 관리')
@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @Auth(Role.ADMIN, Role.SUPER_ADMIN)
  async getProfile(@GetAdmin() admin: Admin) {
    return plainToInstance(AdminDTO, admin);
  }

  @Post('login')
  async login(@Body() body: LoginDTO) {
    return await this.authService.login(body);
  }

  @Get('refresh')
  async getAccessTokenByRefreshToken(
    @Headers('RefreshToken') refreshToken: string
  ) {
    return await this.authService.getAccessTokenByRefreshToken(
      refreshToken
    );
  }
}
```

## AuthService

```js
import { AccessTokenPayload, RefreshTokenPayload } from '@cms/common';
import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Admin } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { OAuth2Client, TokenPayload } from 'google-auth-library';
import { PrismaService } from '../../prisma/prisma.service';
import { LoginByEmailDTO, LoginByGoogleDTO } from './auth.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async login(data: LoginDTO) {
    const admin = await this.prisma.admin.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!admin)
      throw new UnauthorizedException('사용자 정보를 찾을 수 없습니다.');

    const decryptedPassword = bcrypt.compareSync(data.password, admin.password);

    if (!decryptedPassword)
      throw new UnauthorizedException('사용자 정보를 찾을 수 없습니다.');

    const accessToken = await this.createAccessToken(admin);
    const refreshToken = await this.createRefreshToken(admin);
    return { accessToken, refreshToken };
  }

  private async createAccessToken(admin: Admin) {
    const accessToken = this.jwtService.sign(
      {
        id: admin.id,
      },
      {
        secret: process.env['JWT_ACCESS_TOKEN_SECRET'],
        expiresIn: process.env['JWT_ACCESS_TOKEN_EXPIRATION_TIME'],
      }
    );
    return accessToken;
  }

  private async createRefreshToken(admin: Admin) {
    const refreshToken = this.jwtService.sign(
      {
        id: admin.id,
      },
      {
        secret: process.env['JWT_REFRESH_TOKEN_SECRET'],
        expiresIn: process.env['JWT_REFRESH_TOKEN_EXPIRATION_TIME'],
      }
    );

    const hashedRefreshToken = await bcrypt.hash(refreshToken);

    await this.prisma.admin.update({
      where: {
        id: admin.id,
      },
      data: {
        refreshToken : hashedRefreshToken,
      },
    });

    return refreshToken;
  }

  async getAccessTokenByRefreshToken(token: string) {
    const bearer = token.split(' ')[0];
    const refreshToken = token.split(' ')[1];

    if ((bearer && bearer !== 'Bearer') || !refreshToken) {
      throw new UnauthorizedException('사용자 정보를 찾을 수 없습니다.');
    }

    let payload;
    try {
      payload = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      });
    } catch (error) {
      throw new UnauthorizedException('사용자 정보를 찾을 수 없습니다.');
    }

    const admin = await this.prisma.admin.findUnique({
      where: { id: payload.id },
    });

    const isMatch = await bcrypt.compare(
      refreshToken,
      admin.refreshToken
    );

    if (!isMatch)
      throw new UnauthorizedException('사용자 정보를 찾을 수 없습니다.');

    const accessToken = await this.createAccessToken(admin);

    return accessToken;
  }
}
```
