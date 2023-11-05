# prisma relation one to one

> 참조 id에 @unique

```prisma
model User {
  id       Int      @id @default(autoincrement())
  name     String
  profile  Profile?
}

model Profile {
  id       Int     @id @default(autoincrement())
  bio      String?
  user     User    @relation(fields: [userId], references: [id])
  userId   Int     @unique
}
```
