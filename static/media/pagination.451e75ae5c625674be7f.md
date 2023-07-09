# pagination

## prisma query

```ts
export class SomeService {
  async search(option: PageOptionDTO): Promise<[Post[], number]> {
    const where: Prisma.PostWhereInput = {
      title: { contains: option.query },
      createdAt: {
        lte: dayjs(option.endDate).subtract(9, "hour").toDate(),
        gte: dayjs(option.startDate).subtract(9, "hour").toDate(),
      },
    };
    const count = await this.prismaService.post.count({ where });
    const posts = await this.prismaService.post.findMany({
      where,
      take: option.pageSize,
      skip: (option.pageNo - 1) * option.pageSize,
    });
    return [posts, count];
  }
}
```
