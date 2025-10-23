# prisma cursor

> db의 cursor 개념이 아님

```ts
const cursor = 1;

// declare c cursor for select id from users where age between 20 and 30;
const result = await this.prisma.user.findMany({
  skip: 1, // cursor의 데이터를 제외하기 위해서 1로 설정
  cursor: {
    id: cursor,
  },
  where: {
    age: {
      gte: 20,
      lte: 30,
    },
  },
});

cursor = result[result.length - 1].id;
```
