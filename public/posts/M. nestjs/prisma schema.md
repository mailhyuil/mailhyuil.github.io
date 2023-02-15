# prisma schema

[schema]('https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference')

## relation

```prisma
model Post {
    id Int @id @default(autoincrement())
    title String
    content String
}
model User {
    id String @id @default(@uuid())
    username String

    post Post @relation(fields:[postId], references:[id], onDelete: Cascade)
    postId Int
}
```

## Json

```
some Json @db.JsonB
```
