# prisma client api

[client api]('https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#datasources')

## crud

```ts
findUnique; // unique value만 where 인풋에 넣을 수 있다.
findUniqueOrThrow;
findFirst; // unique value가 아닌것들도 넣을 수 있다.
findFirstOrThrow;
findMany;
create;
update;
upsert;
delete createMany;
updateMany;
deleteMany;
count;
aggregate;
groupBy;
```

## query options

```ts
select;
include;
where;
orderBy;
distinct;
```

## nested query

```ts
create;
createMany;
set;
connect;
connectOrCreate;
disconnect;
update;
upsert;
delete updateMany;
deleteMany;
```

## list methods

```ts
set;
push;
unset;
```

## list filters

```ts
has;
hasEvery;
hasSome;
isEmpty;
isSet;
equals;
```

## composite type methods

```ts
set;
unset;
update;
upsert;
push;
```

## composite type filters

```ts
equals;
is;
isNot;
isEmpty;
every;
some;
none;
```

## JSON filters
