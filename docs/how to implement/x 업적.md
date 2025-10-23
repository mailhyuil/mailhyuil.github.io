# 업적

## prisma

```prisma
model User {
    id        Int      @id @default(autoincrement())
    email     String   @unique
    name      String?
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt

    achievements UserAchievement[]
}

model Achievement {
    id        Int      @id @default(autoincrement())
    name      String
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt

    users UserAchievement[]
}

model UserAchievement {
    id        Int      @id @default(autoincrement())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt

    user User @relation(fields: [userId], references: [id])
    userId Int

    achievement Achievement @relation(fields: [achievementId], references: [id])
    achievementId Int
}
```
