# typescript as vs satisfies

```ts
type User = {
  name: string;
  age: number;
};

// object를 User로 선언
const user: User = {
  name: "John",
  age: 30,
};

// 타입 체크를 하지 말고 User로 취급하라고 컴파일러에게 알려줌
const user = {
  name: "John",
  age: 30,
} as User;

// 선언하는 object가 User의 모든 속성을 만족하도록 체크
const user = {
  name: "John",
  age: 30,
} satisfies User;
```
