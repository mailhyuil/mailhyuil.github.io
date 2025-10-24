# nest auth jwt 인증 로직

## auth.dto.ts

```ts
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Provider, UserStatus } from "@prisma/client";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { UserDTO } from "../user/user.dto";

export class AuthenticationDTO {
  @ApiProperty()
  readonly id: string;
  @ApiProperty({
    enum: Provider,
  })
  readonly provider: Provider;
  @ApiPropertyOptional()
  readonly providerId?: string;
  @ApiProperty({ type: "Date" })
  readonly createdAt: Date;
  @ApiProperty({ type: "Date" })
  readonly updatedAt: Date;

  @ApiProperty({
    type: () => UserDTO,
  })
  @Type(() => UserDTO)
  readonly user: UserDTO;
  @ApiProperty()
  readonly userId: string;
}

export class LoginDTO {
  @ApiProperty()
  @IsNotEmpty({ message: "사용자 이름은 필수입니다." })
  @IsString({ message: "사용자 이름은 문자열이어야 합니다." })
  readonly username: string;
  @ApiProperty()
  @IsNotEmpty({ message: "비밀번호는 필수입니다." })
  @IsString({ message: "비밀번호는 문자열이어야 합니다." })
  readonly password: string;
}

export class LoginResponseDTO {
  @ApiProperty()
  readonly idToken: string;
  @ApiProperty()
  readonly refreshToken: string;
}

export type IdTokenPayload = {
  id: string;
  roles: string[];
  status: UserStatus;
};

export type RefreshTokenPayload = {
  id: string;
};
```

## auth.controller.ts

```ts
import { Body, Controller, Get, Post, Req, Res, UnauthorizedException } from "@nestjs/common";
import { ApiBody, ApiNoContentResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { type Request, type Response } from "express";
import { LoginDTO } from "./auth.dto";
import { AuthService } from "./auth.service";
import { idTokenOptions, loggedInOptions, refreshTokenOptions } from "./token/token-cookie-options";

@ApiTags("Auth")
@Controller({ path: "auth", version: "1" })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @ApiOperation({
    summary: "로그인",
  })
  @ApiBody({ type: LoginDTO })
  @ApiNoContentResponse()
  async login(@Body() body: LoginDTO, @Res({ passthrough: true }) res: Response) {
    const { idToken, refreshToken } = await this.authService.login(body);
    res.cookie("logged-in", true, loggedInOptions);
    res.cookie("id-token", idToken, idTokenOptions);
    res.cookie("refresh-token", refreshToken, refreshTokenOptions);
  }

  @Get("logout")
  @ApiOperation({
    summary: "로그아웃",
  })
  @ApiNoContentResponse()
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie("logged-in");
    res.clearCookie("id-token");
    res.clearCookie("refresh-token");
  }

  @Get("refresh")
  @ApiOperation({
    summary: "토큰 재발급",
  })
  @ApiNoContentResponse()
  async getIdTokenByRefreshToken(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.cookies["refresh-token"];
    const { idToken, newRefreshToken } = await this.authService.getIdTokenByRefreshToken(refreshToken).catch(err => {
      throw new UnauthorizedException(err.message);
    });
    res.cookie("id-token", idToken, idTokenOptions);
    res.cookie("refresh-token", newRefreshToken, refreshTokenOptions);
  }
}
```

## auth.service.ts

```ts
import { InvalidTokenException, UserNotFoundException } from "@/server/errors/exception";
import { Cache, CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, Logger, OnModuleInit, UnauthorizedException } from "@nestjs/common";
import { JsonWebTokenError, JwtService, TokenExpiredError } from "@nestjs/jwt";
import { PrismaService } from "apps/server/src/prisma/prisma.service";
import bcrypt from "bcrypt";
import { plainToInstance } from "class-transformer";
import { PrismaError } from "prisma-error-enum";
import { IdTokenPayload, LoginDTO, LoginResponseDTO, RefreshTokenPayload } from "./auth.dto";
import { IdTokenService, RefreshTokenService } from "./token/token.token";

const JWT_REFRESH_TOKEN_EXPIRES_IN = 2592000000; /* 30 days in milliseconds */

@Injectable()
export class AuthService implements OnModuleInit {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly prisma: PrismaService,
    @Inject(IdTokenService)
    private readonly idTokenService: JwtService,
    @Inject(RefreshTokenService)
    private readonly refreshTokenService: JwtService,
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
  ) {}

  onModuleInit() {
    this.initAdmin();
  }

  async initAdmin() {
    const username = process.env.ADMIN_USERNAME;
    if (!username) {
      throw new Error("ADMIN_USERNAME 환경변수가 정의되지 않았습니다.");
    }
    const password = process.env.ADMIN_PASSWORD;
    if (!password) {
      throw new Error("ADMIN_PASSWORD 환경변수가 정의되지 않았습니다.");
    }
    const found = await this.prisma.user.findFirst({
      where: {
        roles: {
          has: "ADMIN",
        },
      },
    });
    if (!found) {
      await this.prisma.user.create({
        data: {
          username,
          password: await bcrypt.hash(password, 10),
          name: "admin",
          birthDate: new Date(),
          roles: ["ADMIN"],
          tel: "010-0000-0000",
          authentications: {
            create: {
              provider: "LOCAL",
            },
          },
        },
      });
      this.logger.log("Admin 계정 생성 완료");
    }
  }

  async login(data: LoginDTO) {
    const { username, password } = data;

    const res = await this.prisma.$transaction(async tx => {
      const found = await tx.user
        .findUniqueOrThrow({
          where: {
            username,
          },
          select: {
            id: true,
            password: true,
            roles: true,
            status: true,
          },
        })
        .catch(error => {
          if (error.code === PrismaError.RecordsNotFound) {
            throw new UserNotFoundException(error);
          }
          throw error;
        });

      if (!(await bcrypt.compare(password, found.password))) {
        throw new UnauthorizedException("사용자 정보를 다시 확인해주세요.");
      }

      const idTokenPayload: IdTokenPayload = {
        id: found.id,
        roles: found.roles,
        status: found.status,
      };
      const refreshTokenPayload: RefreshTokenPayload = {
        id: found.id,
      };
      const idToken = this.idTokenService.sign(idTokenPayload);
      const refreshToken = this.refreshTokenService.sign(refreshTokenPayload);

      // ? set refreshToken
      this.cache.set(`refreshToken:${found.id}`, refreshToken, JWT_REFRESH_TOKEN_EXPIRES_IN);

      return {
        idToken,
        refreshToken,
      };
    });
    return plainToInstance(LoginResponseDTO, res);
  }

  async getIdTokenByRefreshToken(refreshToken: string) {
    if (!refreshToken) throw new InvalidTokenException();

    // ? refreshToken 검증
    let payload: IdTokenPayload;
    try {
      payload = this.refreshTokenService.verify(refreshToken);
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        //? 토큰이 임의로 변조된 경우
        throw new InvalidTokenException();
      } else if (error instanceof TokenExpiredError) {
        //? 토큰의 유효기간이 만료된 경우
        throw new InvalidTokenException();
      } else {
        throw new InvalidTokenException();
      }
    }

    // ? get userRefreshToken
    const userRefreshToken = await this.cache.get<string>(`refreshToken:${payload.id}`);

    if (!userRefreshToken) throw new InvalidTokenException();

    // ! userRefreshToken 검증
    let userPayload: RefreshTokenPayload;
    try {
      userPayload = this.refreshTokenService.verify(userRefreshToken);
    } catch (error) {
      this.cache.del(`refreshToken:${payload.id}`);
      if (error instanceof JsonWebTokenError) {
        //? 토큰이 임의로 변조된 경우
        throw new InvalidTokenException();
      } else if (error instanceof TokenExpiredError) {
        //? 토큰의 유효기간이 만료된 경우
        throw new InvalidTokenException();
      } else {
        throw new InvalidTokenException();
      }
    }

    if (userPayload.id !== payload.id) throw new InvalidTokenException();

    // ? payload.id로 유저 조회
    const user = await this.prisma.user
      .findUniqueOrThrow({
        where: { id: payload.id },
        select: {
          id: true,
          roles: true,
          status: true,
        },
      })
      .catch(() => {
        throw new InvalidTokenException();
      });

    const refreshTokenPayload: RefreshTokenPayload = {
      id: user.id,
    };

    const newRefreshToken = this.refreshTokenService.sign(refreshTokenPayload);

    // ? refreshToken rotation
    this.cache.set(`refreshToken:${user.id}`, newRefreshToken, JWT_REFRESH_TOKEN_EXPIRES_IN);

    const idTokenPayload: IdTokenPayload = {
      id: user.id,
      roles: user.roles,
      status: user.status,
    };

    const idToken = this.idTokenService.sign(idTokenPayload);

    return { idToken, newRefreshToken };
  }

  async getUserByIdToken(idToken: string): Promise<IdTokenPayload> {
    return this.idTokenService.verify(idToken);
  }
}
```

## auth.guard.ts

```ts
import { InvalidTokenException } from "@/server/errors";
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JsonWebTokenError, TokenExpiredError } from "@nestjs/jwt";
import { Request, Response } from "express";
import { ClsService } from "nestjs-cls";
import { AuthService } from "../auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly cls: ClsService, private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext) {
    const req: Request = context.switchToHttp().getRequest();
    const res: Response = context.switchToHttp().getResponse();
    const cookies = req.cookies;
    const idToken = cookies["id-token"];
    if (!idToken) throw new UnauthorizedException();

    const user = await this.authService.getUserByIdToken(idToken).catch(async error => {
      if (error instanceof JsonWebTokenError) {
        // ? 토큰이 임의로 변조된 경우
        res.clearCookie("logged-in");
        res.clearCookie("id-token");
        res.clearCookie("refresh-token");
        throw new InvalidTokenException();
      } else if (error instanceof TokenExpiredError) {
        throw new InvalidTokenException();
      } else {
        throw error;
      }
    });

    req["user"] = user;
    this.cls.set("user", user);

    return true;
  }
}
```

## get-user.decorator.ts

```ts
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { IdTokenPayload } from "../auth.dto";
type UserRecord = keyof IdTokenPayload;
export const GetUser = createParamDecorator((data: UserRecord, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  return data ? req.user?.[data] : req.user;
});
```

## id-token.guard.ts

```ts
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

const blacklist = [];
@Injectable()
export class IdTokenGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const idToken = req.cookies["id-token"];
    if (blacklist.includes(idToken)) {
      throw new UnauthorizedException("Blocked IdToken");
    }
    return true;
  }
}
```
