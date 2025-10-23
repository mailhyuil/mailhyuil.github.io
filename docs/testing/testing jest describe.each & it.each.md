# jest describe.each & it.each

> 여러 값을 반복적으로 테스트할 때 사용

```ts
describe.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])(".add(%i, %i)", (a, b, expected) => {
  it(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });

  it(`returned value not be greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected);
  });

  it(`returned value not be less than ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected);
  });

  it.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])("returns %i when %i is added to %i", (expected, a, b) => {
    expect(a + b).toBe(expected);
  });
});
```
