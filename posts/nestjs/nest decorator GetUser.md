# GetUser decorator

> Guard에서 user를 넣어주기

```ts
export const GetUser = createParamDecorator<User>((data: User, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
```
