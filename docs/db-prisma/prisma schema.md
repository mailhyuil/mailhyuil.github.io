# prisma schema

> native database type을 사용하려면 @db.type을 사용
>
> > 배열은 [] nullable은 ?으로

[schema](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)

## scalar types

```
String
Boolean
Int
BigInt
Float
Decimal
DateTime
Json
Bytes
Unsupported
```

## attribute

> @@은 복합키 (e.g. @@id([a, b]))

```
@id
@@id
@default
@unique
@@unique
@@index
@relation
@map
@@map
@updatedAt
@ignore
@@ignore
```

## attribute function

```
auto()
autoincrement()
sequence()
cuid()
uuid()
now()
dbgenerated()
```

## Json

```
some Json @db.JsonB
```

## enum

## type
