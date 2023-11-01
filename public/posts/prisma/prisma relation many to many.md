# prisma relation many to many junction table

## explicit

```
model ReservedSeat {
    seat Seat @relation(fields: [seatId], references: [id])
    seatId String
    reservation Reservation @relation(fields: [reservationId], references: [id])
    reservationId String

    createdAt DateTime @default(now())
    updatedAt DateTime  @updatedAt

    @@id([seatId, reservationId])
}
```

## implicit

```
model Post {
  id         Int        @id @default(autoincrement())
  title      String
  categories Category[]
}

model Category {
  id    Int    @id @default(autoincrement())
  name  String
  posts Post[]
}
```
