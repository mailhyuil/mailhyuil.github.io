# testing jest fn

> object의 특정 method를 mocking할 때 사용

```js
// jest.fn
const mockFn = jest.fn(()=>'Hello World!');
const mockAsyncFn = jest.fn(async ()=>'Hello World!');
// jest.fn type
const mockFn: jest.Mock<() => string> = jest.fn(()=>'Hello World!');
const mockedFn: jest.Mocked<typeof mockFn> = jest.fn(()=>'Hi, Hyuil!');

// jest.spyOn
jest.spyOn(Date, 'now')
// jest.spyOn type
jest.Spied<typeof Date.now>
```
