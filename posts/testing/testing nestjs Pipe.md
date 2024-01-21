# testing nestjs pipe

```ts
import { ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { ParseIntPipe } from "./parse-int.pipe";

describe("ParseIntPipe", () => {
  let parseIntPipe: ParseIntPipe;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [ParseIntPipe],
    }).compile();

    parseIntPipe = moduleRef.get<ParseIntPipe>(ParseIntPipe);
  });

  it("should be defined", () => {
    expect(parseIntPipe).toBeDefined();
  });

  describe("transform", () => {
    it("should return parsed int", () => {
      const metadata: ArgumentMetadata = {
        type: "param",
        metatype: Number,
        data: "id",
      };

      expect(parseIntPipe.transform("1", metadata)).toBe(1);
    });

    it("should throw BadRequestException", () => {
      const metadata: ArgumentMetadata = {
        type: "param",
        metatype: Number,
        data: "id",
      };

      expect(() => parseIntPipe.transform("a", metadata)).toThrow(BadRequestException);
    });
  });
});
```
