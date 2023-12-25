# nest testing mocking & spy

> mocking: 의존하는 모듈을 가짜로 대체하는 것
>
> > spy: 함수가 호출되었는지, 어떤 인자로 호출되었는지, 몇 번 호출되었는지 등을 확인할 수 있는 기능

```ts
import { Test } from "@nestjs/testing";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

describe("CatsController", () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catsService = moduleRef.get<CatsService>(CatsService);
    catsController = moduleRef.get<CatsController>(CatsController);
  });

  describe("findAll", () => {
    it("should return an array of cats", async () => {
      const result = ["test"];
      jest.spyOn(catsService, "findAll").mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});
```
