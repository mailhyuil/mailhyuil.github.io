# testing jest fn mock instance

> .mock 프로퍼티를 사용하여 함수의 호출 정보를 확인할 수 있다.

```js
const mockFn = jest.fn((x) => x + 1);

mockFn.mock.calls;
mockFn.mock.results;
mockFn.mock.instances;
```
