# testing base given-when-then

```js
describe("given-when-then", () => {
  it("1 + 1은 2", () => {
    // given
    const a = 1;
    const b = 1;

    // when
    const result = a + b;

    // then
    expect(result).toBe(2);
  });
});
```
