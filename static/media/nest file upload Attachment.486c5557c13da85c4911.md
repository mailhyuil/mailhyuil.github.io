# nest file upload Attachment

## prisma

```prisma
model Attachment {
    id    String      @id @default(cuid())
    name  String
    size  Int
    url   String
    extension String?
    createdAt DateTime @default(now()) @map("created_at")
    @@map("attachments")
}
```

## controller

```ts

```

## service

```ts

```

## client
