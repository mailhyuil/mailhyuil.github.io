# nest testing prisma

## install

```sh
npm i -D jest-mock-extended@2.0.4
```

## notice.service.spec.ts

```ts
import { NotFoundException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { Post, Prisma, PrismaClient } from "@prisma/client";
import { DeepMockProxy, mockDeep } from "jest-mock-extended";
import { PrismaService } from "./../../prisma/prisma.service";
import { PostDto } from "./post.dto";
import { PostService } from "./post.service";

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
      select: {
        postId: true;
        title: true;
        content: true;
        createdAt: true;
        attachments: {
          select: {
            id: true;
            url: true;
          };
        };
      };
    };
  };
}>;

const postSnapshotEntity: PostEntityType["snapshots"][0] = {
  postId: "1",
  title: "title",
  content: "content",
  createdAt: new Date(),
  attachments: [],
};

const postEntity = {
  snapshots: [postSnapshotEntity],
} satisfies PostEntityType;

const postDto: PostDto = {
  id: "1",
  title: "title",
  content: "content",
  attachments: [],
  createdAt: new Date(),
};

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
      // mocking
      prismaMock.post.findMany.mockResolvedValueOnce([postEntity] as any);
      // testing
      const found = await service.findAll();
      expect(found).toEqual([postDto]);
      expect(found[0]).toBeInstanceOf(PostDto);
    });
  });
  describe("findById", () => {
    it("should return a post", async () => {
      // mocking
      const snapshots = jest.fn().mockResolvedValueOnce([postSnapshotEntity]);
      prismaMock.post.findUniqueOrThrow.mockImplementationOnce(
        () =>
          ({
            snapshots,
          } as any)
      );
      // testing
      expect(service.findById("")).resolves.toEqual(postDto);
    });
    it("should throw NotFoundException", async () => {
      // mocking
      const snapshots = jest.fn().mockRejectedValueOnce(new NotFoundException());
      prismaMock.post.findUniqueOrThrow.mockImplementationOnce(
        () =>
          ({
            snapshots,
          } as unknown as Prisma.Prisma__PostClient<Post>)
      );
      // testing
      expect(service.findById("")).rejects.toThrow(NotFoundException);
    });
  });
});
```
