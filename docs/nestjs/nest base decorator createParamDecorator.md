# nest base decorator createParamDecorator

> createParamDecorator로 생성

```ts
export const GetUser = createParamDecorator<User>((data: User, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
```
