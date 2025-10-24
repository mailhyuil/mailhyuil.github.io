# nest base guard RoleGuard

> 기본으로 Member, Admin, Guest 권한을 생성해라
>
> > ForbiddenException을 던져라

```ts
import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "@prisma/client";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const roles = this.reflector.getAllAndOverride<string[]>("roles", [context.getHandler(), context.getClass()]);

    const user = await req.user;

    const userRoles: Role[] = user.roles;

    const intersections = userRoles?.filter(role => roles.includes(role));

    if (!intersections || !intersections.length) {
      throw new ForbiddenException("사용 권한이 없습니다.");
    }
    return true;
  }
}
```
