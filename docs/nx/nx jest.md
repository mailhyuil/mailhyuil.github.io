# nx jest

## install

```sh
npm install -D @nx/jest
nx g @nx/jest
```

## apps/server/\_\_test\_\_/services/example.service.spec.ts

```ts
import { Test, TestingModule } from "@nestjs/testing";
import { ExampleService } from "../src/app/examples/example.service";
import { PrismaService } from "../src/prisma/prisma.service";

const result = [];

const one = result[0];

const db = {
  example: {
    findMany: jest.fn().mockResolvedValue(result),
    findUnique: jest.fn().mockResolvedValue(one),
    findUniqueOrThrow: jest.fn().mockResolvedValue(one),
    findFirst: jest.fn().mockResolvedValue(one),
    findFirstOrThrow: jest.fn().mockResolvedValue(one),
    create: jest.fn().mockResolvedValue(one),
    update: jest.fn().mockResolvedValue(one),
    upsert: jest.fn().mockResolvedValue(one),
    delete: jest.fn().mockResolvedValue(one),
  },
};

describe("ExampleService", () => {
  let prisma: PrismaService;
  let service: ExampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExampleService,
        {
          provide: PrismaService,
          useValue: db,
        },
      ],
    }).compile();

    prisma = module.get<PrismaService>(PrismaService);
    service = module.get<ExampleService>(ExampleService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("findAll", () => {
    it("should return an array of examples", async () => {
      const examples = await service.findAll();
      expect(examples).toEqual(result);
    });
  });
});
```
