# nest roleGuard

> 기본으로 Member, Admin, Guest 권한을 생성해라

```ts
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "@prisma/client";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  async canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>("roles", [context.getHandler(), context.getClass()]);

    if (requiredRoles.includes(Role.Guest)) return true;

    const request = context.switchToHttp().getRequest();

    const user = request.user;
    const roles: Role[] = (await user)?.roles;

    const intersections = roles?.filter((role) => requiredRoles.includes(role));

    if (!intersections || !intersections.length) {
      throw new UnauthorizedException("사용 권한이 없습니다.");
    }
    return true;
  }
}
```
