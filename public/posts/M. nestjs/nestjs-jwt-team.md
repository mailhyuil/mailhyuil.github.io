# @nestjs/jwt

## install

```
yarn add @nestjs/jwt
```

## auth.util.ts

```ts
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AccessTokenPayload } from "src/interface/type/auth/access-token-payload";
import { RefreshTokenPayload } from "src/interface/type/auth/refresh-token-payload";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthUtil {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService
  ) {}

  createAccessToken(payload: AccessTokenPayload): string {
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: "3h",
    });
    return accessToken;
  }

  createRefreshToken(payload: RefreshTokenPayload): string {
    const refreshToken = this.jwtService.sign(payload);

    return refreshToken;
  }

  verifyAccessToken(accessToken: string): AccessTokenPayload {
    return this.jwtService.verify<AccessTokenPayload>(accessToken);
  }

  verifyRefreshToken(refreshToken: string): RefreshTokenPayload {
    return this.jwtService.verify<RefreshTokenPayload>(refreshToken);
  }
}
```

## auth.module.ts

```ts
imports: [
  JwtModule.registerAsync({ useClass: EnvironmentService }),
],
providers: [AuthUtil],
exports: [AuthUtil]
```

## environment.service.ts

```ts
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModuleOptions } from "@nestjs/jwt";

@Injectable()
export class EnvironmentService {
  constructor(private configService: ConfigService) {}

  createJwtOptions(): JwtModuleOptions {
    return {
      privateKey: this.configService.get<string>("JWT_PRIVATE_KEY"),
      publicKey: this.configService.get<string>("JWT_PUBLIC_KEY"),
      secret: this.configService.get<string>("JWT_SECRET"),
    };
  }
}
```
