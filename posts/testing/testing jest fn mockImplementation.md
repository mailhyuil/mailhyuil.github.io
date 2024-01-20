# jest fn mockImplementation

> jest.fn()으로 mocking된 함수가 반환하는 값을 transform할 때 사용

```js
const fn = jest.fn(() => 10).mockImplementation((x) => x + 1);

fn(); // 11
```
