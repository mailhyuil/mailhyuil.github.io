# nest testing service

```ts
import { Test, TestingModule } from "@nestjs/testing";
import { ExampleService } from "../src/app/examples/example.service";
import { PrismaService } from "../src/prisma/prisma.service";
import { NotFoundException } from "@nestjs/common";

// type ExampleWithRelation = Prisma.ExampleGetPayload<{}>;

const result: ExampleDto[] = [];

const one: ExampleDto = result[0];

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

  describe("findById", () => {
    it("should throw NotFoundException", async () => {
      expect(service.findById("test")).rejects.toThrow(NotFoundException);
    });
  });
});
```
