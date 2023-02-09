# prisma schema

## schema

[prisma_schema](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)

```prisma
model Post {
  id       Int       @id @default(autoincrement())
  // Other fields
  comments Comment[] // A post can have many comments
}

model Comment {
  id     Int
  // Other fields
  Post   Post? @relation(fields: [postId], references: [id]) // A comment can have one post
  postId Int?
}
```
