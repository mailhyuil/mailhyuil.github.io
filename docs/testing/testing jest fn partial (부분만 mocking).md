# testing jest fn partial (부분만 mocking)

```js
jest.mock("./some.service.ts", () => {
  const originalModule = jest.requireActual("./some.service.ts");

  return {
    ...originalModule,
    someFunction: jest.fn().mockReturnValue(true),
  };
});
```
