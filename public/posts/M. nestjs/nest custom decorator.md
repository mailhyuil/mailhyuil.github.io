# nest custom decorator

## 데코레이터 생성

> createParamDecorator() 사용

```ts
export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
```

## 데코레이터 사용

```
@User()
```
