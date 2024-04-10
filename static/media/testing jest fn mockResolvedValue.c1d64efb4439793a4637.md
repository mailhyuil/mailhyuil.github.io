# jest fn mockResolvedValue

> 비동기함수를 mocking할 때 사용

```ts
import { SomeService } from "./some.service";

describe("SomeService", () => {
  let someService: SomeService;

  beforeEach(() => {
    someService = new SomeService();
  });

  describe("getSomeData", () => {
    it("should return some data", async () => {
      const some = [
        { id: 1, name: "a" },
        { id: 2, name: "b" },
      ];

      const getSomeData = jest.fn().mockResolvedValue(some);

      someService.getSomeData = getSomeData;

      const result = await someService.getSomeData();

      expect(result).toBe(some);
    });
  });
});
```
