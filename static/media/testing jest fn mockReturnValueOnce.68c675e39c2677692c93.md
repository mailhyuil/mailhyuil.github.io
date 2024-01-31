# jest fn mockReturnValueOnce

> 호출될 때마다 다른 값을 반환하도록 설정

```js
const fn = jest.fn().mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

fn(); // 10
fn(); // "x"
fn(); // true
```
