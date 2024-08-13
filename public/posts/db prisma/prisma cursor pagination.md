# prisma cursor pagination

## prisma

```prisma
model Post {
  id         String     @id @default(cuid())
  title      String
  content    String
  createdAt  DateTime   @default(now()) @map("created_at")
  updatedAt  DateTime   @updatedAt @map("updated_at")
  @@unique([id, createdAt])
  @@map("posts")
}
```

## service

```ts
pagination(cursor: { id: string; createdAt: Date }) {
  await this.prisma.user.findMany({
    cursor: {
      id_createdAt: cursor ? cursor : undefined,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 10, // 가져올 아이템 수
  });
}
```
