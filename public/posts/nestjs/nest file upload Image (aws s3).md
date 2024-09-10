# nest file upload Image

## prisma

```prisma
model Image {
    id    String      @id @default(cuid())
    url   String
    createdAt DateTime @default(now()) @map("created_at")
    @@map("images")
}
```

## aws-s3.module.ts

```ts

```
