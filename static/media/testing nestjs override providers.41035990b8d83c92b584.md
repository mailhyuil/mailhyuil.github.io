# nest testing override providers

```ts
import { Test } from "@nestjs/testing";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

describe("CatsController", () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      // JwtAuthGuard를 MockAuthGuard로 대체
      .overrideProvider(JwtAuthGuard)
      .useClass(MockAuthGuard)
      .compile();

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
