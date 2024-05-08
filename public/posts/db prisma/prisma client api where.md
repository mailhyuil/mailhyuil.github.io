# prisma client api where

> Prisma.[Name]WhereInput

## usage

```ts
const where: Prisma.PostWhereInput = {
  title: { contains: option.query },
  content: { contains: option.query },
  createdAt: {
    gte: dayjs(option.startDate).add(9, "hour").toDate(),
    lte: dayjs(option.endDate).add(9, "hour").toDate(),
  },
};

if (option.status !== "ALL") {
  where.type = { in: PostType[option.status] }; // where 객체에 값을 할당 // where.type의 값이 없으면 필터링 안함
}
```

## 조건

> field(column) 안에 들어간다

```
equals
not

in
notIn

lt // less than
lte // less than or equal
gt // greater than
gte // greater than or equal

contains
search // search: 'cat & dog',

mode

startsWith
endsWith
AND
OR
NOT
```

## Relation filters

> findMany를 사용할 때 필터링

```
some // 최소한 하나
every // 모든
none // 하나도 아닌
is
isNot

where:{
  post:{
    every:{
      published: true //  '모든' 포스트의 published가 true인 걸 리턴
    },
    some:{
      content:{
        contains: 'Prisma' 콘텐트에 최소한 하나의 'Prisma'가 포함된
      }
    }
  }
}
```

## AND OR

> 배열 사용

```
OR: [
  {
    title: {
      contains: option.query,
    },
  },
  {
    content: {
      contains: option.query,
    },
  },
  {
    name: {
      contains: option.query,
    },
  },
],
```

## model query option

```
select // 리턴값중에 필드를 골라내서 리턴시킬 수 있다
include // 리턴값중에 관계를 골라내서 리턴시킬 수 있다.
where
orderBy
```

## distinct

> 구별해내기

## aggregate (집계함수)

```
export type UserAggregateArgs = {
  where?: UserWhereInput
  orderBy?: XOR<Enumerable<UserOrderByInput>, UserOrderByInput>
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<UserDistinctFieldEnum>
  _count?: true | UserCountAggregateInputType
  _avg?: UserAvgAggregateInputType
  _sum?: UserSumAggregateInputType
  _min?: UserMinAggregateInputType
  _max?: UserMaxAggregateInputType
}
```

```
const aggregations = await prisma.user.aggregate({
  _avg: {
    age: true,
  },
})

console.log('Average age:' + aggregations._avg.age)
```

## groupBy

> 그룹묶기
>
> > by 사용

```
const groupUsers = await prisma.user.groupBy({
  by: ['country'],
  _sum: {
    profileViews: true,
  },
})

//result
[
  { country: 'Germany', _sum: { profileViews: 126 } },
  { country: 'Sweden', _sum: { profileViews: 0 } },
]
```
