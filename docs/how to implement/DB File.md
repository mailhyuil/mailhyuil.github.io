# DB File

```prisma
model File {
  id String @id @default(cuid())
  name String
  url String
  size Int
  type String
  hash String
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")
  // relations...
  @@map("files")
}
```
