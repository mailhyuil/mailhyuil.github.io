# nest file upload Image

> cdn을 사용하여 구현

## prisma

```prisma
model Image {
    id    String      @id @default(cuid())
    url   String
    createdAt DateTime @default(now()) @map("created_at")
    @@map("images")
}
```

## controller

```ts

```

## service

```ts

```

## client
