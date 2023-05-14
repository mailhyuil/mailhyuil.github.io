# prisma index
> @@index([정렬하고 싶은 field], type:indexType)
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
