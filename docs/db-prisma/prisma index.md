# prisma index

> @@index([정렬하고 싶은 field], type:indexType)
>
> > 조회하는 기준이 가장 많은 필드를 index로 만들어라
> >
> > > PK는 기본으로 PK인덱스가 생성된다.
> > >
> > > > 필드인덱스를 생성하여 검색을 하면, 우선 필드를 이용해서 PK를 찾고 다시 PK인덱스에서 검색해서 원하는 데이터를 찾는다.
> > > >
> > > > > 동등 비교만 수행할 경우에는 Hash type index가 가장 빠르다

```prisma
model User {
  id        String     @id @default(cuid())
  name      String
  age       Int
  sex       String
  birthDate DateTime
  identity  String
  @@index([sex, identity])
  @@index([sex, age(sort: Desc), birthDate])
  @@index([name], type: Hash)
}
```

## arguments

### length

> allows you to specify a maximum length for the subpart of the value to be indexed on String and Bytes types

### sort

> allows you to specify the order that the entries of the constraint or index are stored in the database

### type

> allows you to support index access methods other than PostgreSQL's default BTree access method

### clustered

> allows you to configure whether a constraint or index is clustered or non-clustered
