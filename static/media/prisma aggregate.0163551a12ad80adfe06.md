# prisma aggregate

> \_sum, \_count, \_avg, 앞에 언더바가 있으면 결과값으로 나오는 것들

```ts
this.prismaService.user.aggregate();
this.prismaService.user.groupBy();
this.prismaService.user.count();
```
