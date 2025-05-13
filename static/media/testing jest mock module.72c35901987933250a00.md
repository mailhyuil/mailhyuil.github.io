# testing jest mock module

> object를 mocking

```js
import axios from "axios";

jest.mock("axios"); // axios 모듈을 mocking

const foundUsers = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

/// axios 객체는 mocking되어 있음
axios.get.mockResolvedValue(foundUsers);

axios.get("/users").then((res) => {
  expect(res.data).toEqual(foundUsers);
});
```
