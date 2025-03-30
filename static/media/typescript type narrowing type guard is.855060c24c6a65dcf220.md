# typescript is

> 매개변수를 Type으로 보라는 뜻
>
> > 컴파일 단계에서만 동작
> >
> > > isString 같은 함수(type guard)를 만드는데 사용

```ts
interface UserType {
  id: string;
  username: string;
  realname: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  blockedAt: Date;
  deletedAt: Date;
}

// 모든 키를 가지고 있는지 확인하는 방법
function isUserDto(arg: any): arg is UserType {
  const keys = Object.keys(arg);
  return keys.every(
    key =>
      key in ["id", "username", "realname", "email", "password", "createdAt", "updatedAt", "blockedAt", "deletedAt"],
  );
}

// flag만 하나 선택해서 확인하는 방법
function isUserDto(arg: any): arg is UserType {
  return arg.type === "User";
}
```
