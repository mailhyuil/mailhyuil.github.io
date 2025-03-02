# testing jest-when

> fn에 parameter 값이 들어갔을 때 테스트

## install

```sh
npm i -D jest-when
```

## usage

```js
const { when } = require("jest-when");

const fn = jest.fn(); // 1) Start with any normal jest mock function

when(fn) // 2) Wrap it with when()
  .calledWith(1, 1) // 3) Add your matchers with calledWith()
  .mockReturnValue(2); // 4) Then use any of the normal set of jest mock functions

expect(fn(1, 1)).toBe(2);
```
