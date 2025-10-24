# x Null Object Pattern

> 값이 없음을 명확하게 나타내기 위한 객체
>
> > real object와 null object 두개의 object를 만들어서 null object에서 null일 경우 수행할 로직을 담는 것

## as-is

```ts
const users = ["Alice", "Bob", "Charlie"];

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    console.log("Hello, " + this.name);
  }
}

const userList = ["Alice", "David", "Bob", "Charlie", "Eve"];

function userFactory(name: string) {
  const foundName = users.find((user) => user === name);
  if (!foundName) return null;
  return new User(name);
}

userList.forEach((name) => {
  const found = userFactory(name);
  // 분기문을 통해 null을 체크하고 null일 시 로직을 작성해야한다.
  if (!found) {
    console.log(`Hello, ${name} (Guest), You are not registered.`);
  }
  if (found) {
    found.sayHello();
  }
});

/*
 * Hello, Alice
 * Hello, David (Guest), You are not registered.
 * Hello, Bob
 * Hello, Charlie
 * Hello, Eve (Guest), You are not registered.
 */
```

## to-be

```ts
const users = ["Alice", "Bob", "Charlie"];

abstract class AbstractUser {
  abstract name: string;
  abstract sayHello(): void;
}

class User extends AbstractUser {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  sayHello() {
    console.log("Hello, " + this.name);
  }
}

class NullUser extends AbstractUser {
  name: string;
  constructor(name: string) {
    super();
    this.name = `${name} (Guest)`;
  }
  sayHello() {
    console.log("Hello, " + this.name + ", You are not registered.");
  }
}

const userList = ["Alice", "David", "Bob", "Charlie", "Eve"];

function userFactory(name: string) {
  const foundName = users.find((user) => user === name);
  if (!foundName) return new NullUser(name);
  return new User(name);
}

userList.forEach((name) => {
  const found = userFactory(name);
  // 분기문을 작성할 필요가 없다.
  found.sayHello();
});

/*
 * Hello, Alice
 * Hello, David (Guest), You are not registered.
 * Hello, Bob
 * Hello, Charlie
 * Hello, Eve (Guest), You are not registered.
 */
```
