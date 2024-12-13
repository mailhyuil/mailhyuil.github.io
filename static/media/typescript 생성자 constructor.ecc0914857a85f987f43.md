# typescript 생성자 constructor

> new 키워드를 사용하면 constructor를 리턴한다고 생각하자

```ts
class User {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
// or
class User {
  constructor(private name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const user = new User("Hyuil");

console.log(user.getName());
```
