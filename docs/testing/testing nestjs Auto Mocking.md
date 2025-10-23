# testomg nestjs Auto Mocking

> module에 의존성이 많은 경우에 자동으로 의존성을 mocking해준는 기능

```ts
import { ModuleMocker, MockFunctionMetadata } from "jest-mock";

const moduleMocker = new ModuleMocker(global);

describe("CatsController", () => {
  let controller: CatsController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatsController],
    })
      .useMocker((token) => {
        const results = ["test1", "test2"];
        if (token === CatsService) {
          return { findAll: jest.fn().mockResolvedValue(results) };
        }
        if (typeof token === "function") {
          const mockMetadata = moduleMocker.getMetadata(token) as MockFunctionMetadata<any, any>;
          const Mock = moduleMocker.generateFromMetadata(mockMetadata);
          return new Mock();
        }
      })
      .compile();

    controller = moduleRef.get(CatsController);
  });
});
```
