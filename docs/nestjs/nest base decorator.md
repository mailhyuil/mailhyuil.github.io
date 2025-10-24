# nest base decorator

> context에 접근해야한다면 interceptor, guard를 applyDecorators로 만들어서 사용하자.

## class & method 데코레이터

```ts
// 방법 1. Reflector.createDecorator() 사용
import { Reflector } from "@nestjs/core";
export const Roles = Reflector.createDecorator<string[]>();

// 방법 2. SetMetadata() 사용
import { SetMetadata } from "@nestjs/common";
export const Roles = (...roles: string[]) => SetMetadata("roles", roles);
```

## param 데코레이터

> createParamDecorator() 사용

```ts
export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
```

## 데코레이터 합치기

> applyDecorators는 데코레이터를 하나로 합쳐준다.

```ts
import { applyDecorators } from "@nestjs/common";

export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata("roles", roles),
    UseGuards(AuthGuard, RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: "Unauthorized" })
  );
}
```
