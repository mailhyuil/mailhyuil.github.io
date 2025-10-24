# prisma relation inheritance 상속

```prisma
model Item {
  id     Int      @id @default(autoincrement())
  name   String
  price  Int
  album  Album?
  book   Book?
  movie  Movie?
}

model Album {
  id     Int      @id @default(autoincrement())
  artist String
  item   Item     @relation(fields: [itemId], references: [id])
  itemId Int      @unique
}

model Book {
  id      Int      @id @default(autoincrement())
  author  String
  isbn    String
  item    Item     @relation(fields: [itemId], references: [id])
  itemId  Int      @unique
}

model Movie {
  id       Int      @id @default(autoincrement())
  actor    String
  director String
  item     Item     @relation(fields: [itemId], references: [id])
  itemId   Int      @unique
}
```
