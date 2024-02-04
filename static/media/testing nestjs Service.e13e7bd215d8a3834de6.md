# nest testing service

```ts
import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../prisma/prisma.service";
import { ExampleService } from "./example.service";

describe("ExampleService", () => {
  let service: ExampleService;
  let prisma: PrismaService;
  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [ExampleService, PrismaService],
    }).compile();

    service = moduleRef.get<ExampleService>(ExampleService);
    prisma = moduleRef.get(PrismaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return all examples", async () => {
    const mock: ExampleDTO[] = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    prisma.example.findMany = jest.fn().mockReturnValue(mock);
    const found = await service.findAll();

    expect(found).toEqual(mock);
  });
});
```
