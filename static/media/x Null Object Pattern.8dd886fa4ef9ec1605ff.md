# Null Object Pattern

> 값이 없음을 명확하게 나타내기 위한 객체
>
> > 원시값의 경우에는 그 값에서 사용하지 않는 값 e.g. -1 등을 사용 (센티널 값)

## usage

```ts
interface IUser {
  name: string;
  age: number;
}

class User implements IUser {
  constructor(public name: string, public age: number) {}
}

class NullUser implements IUser {
  name = "Guest";
  age = 0;
}

function getUser(name: string, age: number): IUser {
  if (name && age) {
    return new User(name, age);
  }
  return new NullUser();
}

const user = getUser("John", 30);
```
