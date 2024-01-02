# prisma 무한 스크롤 Date cursor

> client에서 {cursor: new Date(notice.at(-1).createdAt)} 으로 넣어주기

```ts
  async scrollSearch(cursorDate: Date) {
    return await this.prismaService.notice.findMany({
      where: {
        createdAt: {
          lte: cursorDate,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 10, // 가져올 아이템 수
    });
  }
```
