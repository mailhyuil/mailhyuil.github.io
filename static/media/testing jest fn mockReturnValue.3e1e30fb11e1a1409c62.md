# jest fn mockReturnValueOnce

> 동기함수를 mocking할 때 사용

```js
const fn = jest.fn().mockReturnValue(true);

fn(); // true
```
