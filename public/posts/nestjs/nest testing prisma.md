# nest testing prisma

## notice.service.spec.ts

```ts
import { PrismaService } from "@modules/prisma";
import { Test, TestingModule } from "@nestjs/testing";
import { Notice } from "@prisma/client";
import { NoticeService } from "./notice.service";

describe("NoticeService", () => {
  let noticeService: NoticeService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoticeService, PrismaService],
    }).compile();

    noticeService = module.get<NoticeService>(NoticeService);
    prisma = module.get(PrismaService);
  });

  it("should be defined", () => {
    expect(noticeService).toBeDefined();
  });

  describe("NoticeService.findAll", () => {
    it("should return all notices", async () => {
      const result: Notice[] = [
        {
          id: 1,
          isPinned: true,
          title: "test 1",
          content: "test 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 1,
          isPinned: false,
          title: "test 2",
          content: "test 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      prisma.notice.findMany = jest.fn().mockReturnValueOnce(result);

      expect(await noticeService.findAll()).toBe(result);
    });
  });
});
```
