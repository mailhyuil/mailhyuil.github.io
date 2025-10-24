# prisma relation self relations

> 두개의 relation 필요

```prisma
model User {
  id          Int     @id @default(autoincrement())
  name        String?
  successorId Int?    @unique

  successor   User?   @relation("BlogOwnerHistory", fields: [successorId], references: [id])
  predecessor User?   @relation("BlogOwnerHistory")
}
```
