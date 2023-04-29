# js offset pagination

> pageNumber
>
> > pageSize

## front-end

```ts
const option = ref<IPaginationOptionDTO>({
  pageNo: 1,
  pageSize: 10,
  startDate: dayjs().subtract(10, 'year').format('YYYY-MM-DD'),
  endDate: dayjs().format('YYYY-MM-DD HH:mm'),
  query: '',
  type: 'ALL',
});

const { data: result } = await useApiFetch.get<IPaginationDTO<IPostDTO>>('/post/search', {
  method: 'GET',
  query: option.value,
});
```

## back-end

```ts
export class SomeService {
  async search(option: PaginationOptionDTO): Promise<[Post[], number]> {
    const where: Prisma.PostWhereInput = {
      title: { contains: option.query },
      createdAt: {
        lte: dayjs(option.endDate).subtract(9, 'hour').toDate(),
        gte: dayjs(option.startDate).subtract(9, 'hour').toDate(),
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
