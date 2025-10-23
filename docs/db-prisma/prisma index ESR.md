# prisma index ESR

## E - Equality

```ts
where: {
  user: {
    sex: "male";
  }
}
```

## S - Sort

```ts
orderBy: {
  age: "asc";
}
```

## R - Range

```ts
where: {
  birthDate: {
    gte: startDate;
    lte: endDate;
  }
}
```

## result

```ts
const users = await prisma.user.findMany({
  where: {
    user: {
      sex: "male",
    },
    birthDate: {
      gte: startDate,
      lte: endDate,
    },
  },
  orderBy: {
    age: "desc",
  },
});
```

```prisma
model User {
  id        String     @id @default(cuid())
  name      String
  age       Int
  sex       String
  birthDate DateTime
  @@index([sex, age(sort: Desc), birthDate])
}
```
