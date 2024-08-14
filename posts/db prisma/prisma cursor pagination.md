# prisma cursor pagination

## prisma

```prisma
model Post {
  id         String     @id @default(cuid())
  title      String
  content    String
  createdAt  DateTime   @default(now()) @map("created_at")
  updatedAt  DateTime   @updatedAt @map("updated_at")
  @@unique([createdAt(sort: Desc), id])
  @@map("posts")
}
```

## service

```ts
export class PostCursorDTO {
  id: string;
  createdAt: Date;
}

export function pagination(cursor: PostCursorDTO) {
  await this.prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 10, // 가져올 아이템 수
    cursor: {
      createdAt_id: cursor ? cursor : undefined,
    },
    skip: 1,
  });
}
```
