# angular test pipe

> pipe.transform()을 사용

```ts
describe("TitleCasePipe", () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new TitleCasePipe();

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform("abc")).toBe("Abc");
  });

  it('transforms "abc def" to "Abc Def"', () => {
    expect(pipe.transform("abc def")).toBe("Abc Def");
  });

  // ... more tests ...
});
```
