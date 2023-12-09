# GetUser decorator

> Guard에서 user를 넣어주기

## guard

```ts
const request = context.switchToHttp().getRequest();
// logic ...
request.user = user; // user data를 request안에 저장해두기
```

## decorator

```ts
export const GetUser = createParamDecorator<User>((data: User, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
```

## service

> getProfile 메소드

```ts
export class UserService {
  @Get("profile")
  @Auth()
  async getProfile(@GetUser() user: User): Promise<UserDTO> {
    return plainToInstance(UserDTO, user);
  }
}
```
