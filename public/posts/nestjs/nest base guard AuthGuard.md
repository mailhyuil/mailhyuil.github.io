# nestjs AuthGuard

## 구현

```ts
import { AccessTokenPayload } from "@cms/common";
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { InvalidTokenException } from "apps/server/src/lib/exceptions/invalid-token.exception";
import { PrismaService } from "../../../prisma/prisma.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private readonly prismaService: PrismaService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const header = request.headers;
    const authorization = header.authorization;

    if (!authorization) {
      throw new InvalidTokenException();
    }

    if (!authorization.startsWith("Bearer ")) {
      throw new InvalidTokenException();
    }

    const accessToken = authorization.split(" ")[1];
    if (!accessToken) {
      throw new InvalidTokenException();
    }

    let id;
    try {
      const payload = this.authService.verifyAccessToken(accessToken);
      if (!payload.id) {
        throw new InvalidTokenException();
      }
      id = payload.id;
    } catch (e) {
      throw new InvalidTokenException();
    }

    const user = await this.prismaService.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException("사용자를 찾을 수 없습니다.");
    }

    if (user.status !== "ACTIVE") {
      throw new UnauthorizedException("사용할 수 없는 사용자입니다.");
    }

    request.user = user;

    return true;
  }
}
```
