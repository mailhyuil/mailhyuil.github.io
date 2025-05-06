# testing nestjs pipe

```ts
import { ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { ExamplePipe } from "./example.pipe";

describe("ExamplePipe", () => {
  let examplePipe: ExamplePipe;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [ExamplePipe],
    }).compile();

    examplePipe = moduleRef.get<ExamplePipe>(ExamplePipe);
  });

  it("should be defined", () => {
    expect(examplePipe).toBeDefined();
  });

  describe("transform", () => {
    it("should return parsed int", () => {
      const metadata: ArgumentMetadata = {
        type: "param",
        metatype: Number,
        data: "id",
      };

      expect(examplePipe.transform("1", metadata)).toBe(1);
    });

    it("should throw BadRequestException", () => {
      const metadata: ArgumentMetadata = {
        type: "param",
        metatype: Number,
        data: "id",
      };

      expect(() => examplePipe.transform("a", metadata)).toThrow(BadRequestException);
    });
  });
});
```
