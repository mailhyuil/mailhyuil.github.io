# nest testing service

> prisma의 now() 사용 시 createdAt을 [Function: mockConstructor]로 대체해버리기 때문에 명시적으로 new Date()로 대체해줘야 한다.
>
> > $transaction을 사용하기 위해 prismaMock.$transaction.mockImplementation(cb => cb(prismaMock));를 추가해준다.

```ts
import { NotFoundException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { Prisma, PrismaClient, User } from "@prisma/client";
import { plainToInstance } from "class-transformer";
import { DeepMockProxy, mock, mockDeep } from "jest-mock-extended";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateExampleDTO, ExampleDTO, ResponseExampleDTO, UpdateExampleDTO } from "./example.dto";
import { ExampleService } from "./example.service";
const user = mock<User>({});

type ExampleEntityType = Prisma.ExampleGetPayload<{
  include: {};
}>;
const entity = mock<ExampleEntityType>({
  createdAt: new Date(),
});

describe("ExampleService", () => {
  let prismaMock: DeepMockProxy<PrismaClient>;
  let service: ExampleService;

  beforeEach(async () => {
    prismaMock = mockDeep<PrismaClient>();
    prismaMock.$transaction.mockImplementation(cb => cb(prismaMock));

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExampleService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<ExampleService>(ExampleService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
    expect(prismaMock).toBeDefined();
  });

  describe("findAll", () => {
    it("should return an array of examples", async () => {
      const dto = plainToInstance(ExampleDTO, entity);
      prismaMock.example.findMany.mockResolvedValue([entity]);
      const found = await service.findAll();
      expect(found).toEqual([dto]);
    });
  });

  describe("findById", () => {
    it("should return ResponseExampleDTO", async () => {
      const dto = plainToInstance(ResponseExampleDTO, {
        data: entity,
        metadata: {
          prev: undefined,
          next: undefined,
        },
      } as ResponseExampleDTO);

      prismaMock.example.findUniqueOrThrow.mockResolvedValue(entity);
      prismaMock.example.findFirst.mockResolvedValueOnce(undefined);

      const found = await service.findById("good-id");
      expect(found).toEqual(dto);
    });

    it("should throw NotFoundException", async () => {
      prismaMock.example.findUniqueOrThrow.mockRejectedValueOnce(new NotFoundException());
      expect(service.findById("bad-id")).rejects.toThrow(NotFoundException);
    });
  });

  describe("create", () => {
    const createDto = mock<CreateExampleDTO>({});
    it("should return an example", async () => {
      const dto = plainToInstance(ExampleDTO, entity);
      prismaMock.example.create.mockResolvedValue(entity);
      const created = await service.create(createDto);
      expect(created).toEqual(dto);
    });
  });

  describe("update", () => {
    const updateDto = mock<UpdateExampleDTO>({});
    it("should return an example", async () => {
      const dto = plainToInstance(ExampleDTO, entity);
      prismaMock.example.update.mockResolvedValue(entity);
      const updated = await service.update("good-id", updateDto);
      expect(updated).toEqual(dto);
    });
  });

  describe("delete", () => {
    it("should return an example", async () => {
      prismaMock.example.delete.mockResolvedValueOnce(entity);
      expect(service.delete("good-id")).resolves.not.toThrow(new NotFoundException());
    });
  });
});
```
