# testing jest fn spyOn

> object의 특정 method를 mocking할 때 사용

```js
const some = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

jest.spyOn(someService, "getSomeData").mockResolvedValue(some);
```
