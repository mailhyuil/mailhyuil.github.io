# nest custom decorator

## 매개변수 데코레이터 생성

> createParamDecorator() 사용

```ts
export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
```

## SetMetadata()

> Decorator that assigns metadata to the class/function using the specified key.
>
> > metadata 저장할 수 있는 데코레이터

## UseGuard()

> Guard를 사용할 수 있는 데코레이터

## applyDecorators

> Function that returns a new decorator that applies all decorators provided by param
>
> > 인자로 받은 모든 데코레이터를 하나로 합쳐서 리턴

### 데코레이터 체이닝

> applyDecorators()를 사용하여 데코레이터를 체이닝 할 수 있다.

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
