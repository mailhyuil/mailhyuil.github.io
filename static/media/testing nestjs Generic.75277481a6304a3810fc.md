# testing nestjs Generic

> 비슷한 클래스에서 공통적인 행동을 Generic으로 만들어 재사용성을 높이자.
>
> > 초기화, 변수 선언, CRUD, 에러 핸들링 등

```ts
import { Test, TestingModule } from "@nestjs/testing";
import { NotFoundException } from "@nestjs/common";
import { DeepMockProxy, mockDeep } from "jest-mock-extended";
import { PrismaClient } from "@prisma/client";
import { plainToInstance } from "class-transformer";
import { PrismaService } from "../../prisma/prisma.service";

/**
 * NestJS 테스트 모듈을 설정하는 Generic 함수
 */
export async function setupTestModule<T>(service: any, entityName: keyof PrismaClient) {
  const prismaMock = mockDeep<PrismaClient>();
  prismaMock.$transaction.mockImplementation(cb => cb(prismaMock));

  const module: TestingModule = await Test.createTestingModule({
    providers: [service, { provide: PrismaService, useValue: prismaMock }],
  }).compile();

  return {
    service: module.get<T>(service),
    prismaMock,
    entityMock: prismaMock[entityName],
  };
}

/**
 * Generic CRUD 테스트 함수
 */
export function createCrudTests<T>(
  entityName: keyof PrismaClient,
  service: any,
  entityMock: DeepMockProxy<any>,
  DTOs: {
    CreateDTO: any;
    UpdateDTO: any;
    ResponseDTO: any;
  },
) {
  const { CreateDTO, UpdateDTO, ResponseDTO } = DTOs;

  describe(`${entityName} Service CRUD Tests`, () => {
    it("should be defined", () => {
      expect(service).toBeDefined();
      expect(entityMock).toBeDefined();
    });

    describe("findAll", () => {
      it("should return an array of entities", async () => {
        const entity = plainToInstance(ResponseDTO, entityMock);
        entityMock.findMany.mockResolvedValue([entityMock]);

        const found = await service.findAll();
        expect(found).toEqual([entity]);
      });
    });

    describe("findById", () => {
      it("should return ResponseDTO", async () => {
        const entity = plainToInstance(ResponseDTO, entityMock);
        entityMock.findUniqueOrThrow.mockResolvedValue(entityMock);

        const found = await service.findById("good-id");
        expect(found).toEqual(entity);
      });

      it("should throw NotFoundException", async () => {
        entityMock.findUniqueOrThrow.mockRejectedValueOnce(new NotFoundException());
        expect(service.findById("bad-id")).rejects.toThrow(NotFoundException);
      });
    });

    describe("create", () => {
      it("should return a created entity", async () => {
        const createDto = new CreateDTO();
        const entity = plainToInstance(ResponseDTO, entityMock);

        entityMock.create.mockResolvedValue(entityMock);
        const created = await service.create(createDto);

        expect(created).toEqual(entity);
      });
    });

    describe("update", () => {
      it("should return an updated entity", async () => {
        const updateDto = new UpdateDTO();
        const entity = plainToInstance(ResponseDTO, entityMock);

        entityMock.update.mockResolvedValue(entityMock);
        const updated = await service.update("good-id", updateDto);

        expect(updated).toEqual(entity);
      });
    });

    describe("delete", () => {
      it("should return deleted entity", async () => {
        entityMock.delete.mockResolvedValueOnce(entityMock);
        expect(service.delete("good-id")).resolves.not.toThrow(NotFoundException);
      });
    });
  });
}
```
