# Auth decorator

```ts
import { applyDecorators } from "@nestjs/common";

export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata("roles", roles),
    UseGuards(AuthGuard, RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: "Unauthorized" }),
  );
}
```

## Guard에서 metadata 읽기

```ts
const roles = this.reflector.get(Roles, context.getClass()); // controller metadata
const roles = this.reflector.get(Roles, context.getHandler()); // handler metadata
```
