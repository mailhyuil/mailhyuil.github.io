# prisma relation one to one

> 참조 id에 @unique
>
> > 주 테이블(자주 접근할 테이블)에 fk를 두는게 좋다.

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
