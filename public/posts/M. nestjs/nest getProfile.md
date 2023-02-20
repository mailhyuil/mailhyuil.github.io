# nest getProfile

> 서버에 저장해놓은 유저 데이터를 한번 리턴시킬 때

## authGuard

```ts
const request = context.switchToHttp().getRequest();
// logic ...
request.user = user; // user data를 request안에 저장해두기
```

## GetUser param decorator

```ts
export const GetUser = createParamDecorator<User>(
  (data: User, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);
```

## controller

> getProfile 메소드

```ts
  @Get()
  @Auth()
  async getProfile(@GetUser() user: User): Promise<UserDTO> {
    return plainToInstance(UserDTO, user);
  }
```
