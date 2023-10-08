# nest roleGuard

```ts
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AdminRole } from "@prisma/client";

@Injectable()
export class AdminRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  async canActivate(context: ExecutionContext) {
    const required = this.reflector.getAllAndOverride<string[]>("admin_roles", [context.getHandler(), context.getClass()]);

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const roles: AdminRole[] = (await user)?.roles;

    const intersections = roles?.filter((role) => required.includes(role));

    if (!intersections || intersections?.length < 1) {
      throw new UnauthorizedException("사용 권한이 없습니다.");
    }

    return true;
  }
}
```
