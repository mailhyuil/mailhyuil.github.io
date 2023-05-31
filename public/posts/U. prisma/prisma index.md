# prisma index

> @@index([정렬하고 싶은 field], type:indexType)
>
> > > 조회하는 기준이 가장 많은 필드를 index로 만들어라

## arguments

### length

> allows you to specify a maximum length for the subpart of the value to be indexed on String and Bytes types

### sort

> allows you to specify the order that the entries of the constraint or index are stored in the database

### type

> allows you to support index access methods other than PostgreSQL's default BTree access method

### clustered

> allows you to configure whether a constraint or index is clustered or non-clustered

```
model Example {
  id    Int @id
  value Int

  @@index([value], type: Hash)
}
```

```
@@index([author, created_at(sort: Desc)])
```
