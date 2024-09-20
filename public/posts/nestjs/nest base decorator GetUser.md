# GetUser decorator

> Guard에서 user를 넣어주기

## auth.guard.ts

```ts
const request = context.switchToHttp().getRequest();
// logic ...
request.user = user; // user data를 request안에 저장해두기
```

## get-user.decorator.ts

```ts
type UserRecord = keyof User;
export const GetUser = createParamDecorator((data: UserRecord, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return data ? request.user?.[data] : request.user;
});
```

## controller

> getProfile 메소드

```ts
export class UserController {
  @Get("profile")
  @Auth()
  async getProfile(@GetUser() user: User): Promise<UserDTO> {
    return plainToInstance(UserDTO, user);
  }

  @Get("email")
  @Auth()
  async getEmail(@GetUser("email") email: string): Promise<string> {
    return { email };
  }
}
```
