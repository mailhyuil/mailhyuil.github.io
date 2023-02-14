# findAll (search)

> findAll은 모든 데이터를 한번에 가져와버린다 비효율적
>
> > 페이지네이션을 항상 고려해라
> >
> > > search라는 의미를 항상 고려해라
> > >
> > > > searchOption(pageOption)값을 받아서 데이터를 검색 후
> > > >
> > > > > 페이지네이션을 위해서 [data[], dataCount]를 튜플 형태로 넘겨주자
> > > > >
> > > > > > 몇개를 받을 건지(take), 몇개를 건너 띄어야 하는지(skip) 고려하라

```ts
  async search(option: PageOptionDTO): Promise<[Post[], number]> {
    const where: Prisma.PostWhereInput = {
      title: { contains: option.query },
      content: { contains: option.query },
      createdAt: {
        gte: dayjs(option.startDate).add(9, 'hour').toDate(),
        lte: dayjs(option.endDate).add(9, 'hour').toDate(),
      },
    };

    if (option.status !== 'ALL') {
      where.type = { in: PostType[option.status] };
    }

    const count = await this.prismaService.post.count({ where });
    const posts = await this.prismaService.post.findMany({
      where,
      take: option.pageSize,
      skip: (option.pageNo - 1) * option.pageSize,
    });
    return [posts, count];
  }
```
