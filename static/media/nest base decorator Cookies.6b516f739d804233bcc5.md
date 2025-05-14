# nest base decorator Cookies

## decorator

```ts
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Cookies = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return data ? request.cookies?.[data] : request.cookies;
});
```

## controller

```ts
@Get()
findAll(@Cookies('name') name: string) {}
```
