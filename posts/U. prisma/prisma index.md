# prisma index

```
model Example {
  id    Int @id
  value Int

  @@index([value], type: Hash)
}
```
