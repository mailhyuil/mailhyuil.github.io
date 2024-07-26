# testing jest-when

> fn에 parameter 값이 들어갔을 때 테스트

## install

```sh
npm i -D jest-when
```

## usage

```js
const fn = jest.fn(); // 1) Start with any normal jest mock function
when(fn) // 2) Wrap it with when()
  .calledWith(/* any matchers here */) // 3) Add your matchers with calledWith()
  .mockReturnValue(/* some value */); // 4) Then use any of the normal set of jest mock functions

expect(fn(1)).toEqual("yay!");
```
