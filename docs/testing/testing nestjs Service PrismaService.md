# testing nestjs Service PrismaService

## install

```sh
npm i -D jest-mock-extended@2.0.4
```

## post.service.spec.ts

```ts
import { NotFoundException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { Post, PostSnapshot, Prisma, PrismaClient } from "@prisma/client";
import { plainToInstance } from "class-transformer";
import { DeepMockProxy, mock, mockDeep } from "jest-mock-extended";
import { PrismaService } from "./../../prisma/prisma.service";
import { CreatePostDto, PostDto } from "./post.dto";
import { PostService } from "./post.service";
const snapshotSelect = {
  postId: true,
  title: true,
  content: true,
  createdAt: true,
  attachments: {
    select: {
      id: true,
      url: true,
    },
  },
};

type PostEntityType = Prisma.PostGetPayload<{
  orderBy: {
    createdAt: "desc";
  };
  select: {
    snapshots: {
      take: 1;
      orderBy: {
        createdAt: "desc";
      };
      select: typeof snapshotSelect;
    };
  };
}>;

type PostSnapshotEntityType = Prisma.PostSnapshotGetPayload<{
  select: typeof snapshotSelect;
}>;

const postSnapshotEntity: PostSnapshotEntityType = mock<PostSnapshotEntityType>();
const postEntity: PostEntityType = mock<PostEntityType>({
  snapshots: [postSnapshotEntity],
});
const postDto = plainToInstance(PostDto, postEntity.snapshots[0]);

describe("PostService", () => {
  let service: PostService;
  let prismaMock: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    prismaMock = mockDeep<PrismaClient>();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<PostService>(PostService);
  });

  it("service should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("findAll", () => {
    it("should return an array of posts", async () => {
      prismaMock.post.findMany.mockResolvedValueOnce([postEntity] as unknown as Post[]);
      const found = await service.findAll();
      expect(found).toEqual([postDto]);
      expect(found[0]).toBeInstanceOf(PostDto);
    });
    it("should return an empty array", async () => {
      prismaMock.post.findMany.mockResolvedValueOnce([]);
      expect(service.findAll()).resolves.toEqual([]);
    });
  });

  describe("findById", () => {
    it("should return a post", async () => {
      prismaMock.post.findUniqueOrThrow.mockImplementationOnce(
        () =>
          ({
            snapshots: jest.fn(async () => [postSnapshotEntity]),
          } as unknown as Prisma.Prisma__PostClient<Post>)
      );
      const found = await service.findById("good-id");
      expect(found).toEqual(postDto);
    });
  });

  describe("create", () => {
    it("should create a post", async () => {
      const createDto = mock<CreatePostDto>({
        ...postDto,
      });
      prismaMock.postSnapshot.create.mockResolvedValueOnce(postSnapshotEntity as unknown as PostSnapshot);
      const created = await service.create(createDto);
      expect(created).toEqual(postDto);
    });
  });

  describe("remove", () => {
    it("should remove a post", async () => {
      prismaMock.post.delete.mockResolvedValueOnce(postEntity as unknown as Post);
      expect(service.remove("good-id")).resolves.not.toThrow(new NotFoundException());
    });
  });
});
```
