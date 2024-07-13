# db base snapshot

> 업데이트가 가능한 모든 엔티티는 스냅샷 테이블을 가져야 한다.

```prisma
model Post {
    id    String      @id @default(cuid())
    createdAt DateTime @default(now()) @map("created_at")
    updatedAt DateTime @updatedAt @map("updated_at")
    comments Comment[]
    snapshots PostSnapshot[]
    @@map("posts")
}

model PostSnapshot {
    id    String      @id @default(cuid())
    title String
    content String
    createdAt DateTime @default(now()) @map("created_at")
    postId String
    post Post @relation(fields: [postId], references: [id])
    attachments AttachmentSnapshot[]
    @@map("post_snapshots")
}

model Comment {
    id    String      @id @default(cuid())
    createdAt DateTime @default(now()) @map("created_at")
    updatedAt DateTime @updatedAt @map("updated_at")
    postId String
    post Post @relation(fields: [postId], references: [id])
    snapshots CommentSnapshot[]
    @@map("comments")
}

model CommentSnapshot {
    id    String      @id @default(cuid())
    content String
    createdAt DateTime @default(now()) @map("created_at")
    commentId String
    comment Comment @relation(fields: [commentId], references: [id])
    attachments AttachmentSnapshot[]
    @@map("comment_snapshots")
}

model Attachment {
    id    String      @id @default(cuid())
    createdAt DateTime @default(now()) @map("created_at")
    snapshots AttachmentSnapshot[]
    @@map("attachments")
}

model AttachmentSnapshot {
    id    String      @id @default(cuid())
    name  String
    url   String
    extension String?
    createdAt DateTime @default(now()) @map("created_at")
    attachmentId String
    attachment Attachment @relation(fields: [attachmentId], references: [id])
    postSnapshots PostSnapshot[]
    commentSnapshots CommentSnapshot[]
    @@map("attachment_snapshots")
}
```
