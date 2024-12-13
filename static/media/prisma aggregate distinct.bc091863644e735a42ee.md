# prisma distinct

> 중복값을 제거한 데이터 (distinct data)를 얻기 위해 사용
>
> > 중복된 값을 제거한 집합을 얻기 위해 사용

```ts
const distinctCities = await prisma.user.findMany({
  select: {
    city: true,
    country: true,
  },
  distinct: ["city"],
});

/*
[
  { city: 'Paris', country: 'France' },
  { city: 'Lyon', country: 'France' },
]
*/
```
