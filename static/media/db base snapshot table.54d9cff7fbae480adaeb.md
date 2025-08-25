# db base snapshot

> 악성유저등의 이유로 데이터를 저장해야하는 경우가 있을 수 있다. 이때 스냅샷 테이블을 사용하면 이전 데이터를 저장할 수 있다.
>
> > 유저가 update, delete할 수 있는 데이터에 대해서 스냅샷 테이블을 생성한다.
> >
> > > 유저가 update, delete 시 현재 데이터를 스냅샷 테이블에 저장한다.
> > >
> > > > soft delete를 대신할 수 있다.

```prisma
model Post {
    id    String      @id @default(cuid())
    title String
    content String
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
    createdAt DateTime @map("created_at")
    postId String
    post Post @relation(fields: [postId], references: [id])
    attachments AttachmentSnapshot[]
    @@map("post_snapshots")
}

model Comment {
    id    String      @id @default(cuid())
    content String
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
    name  String
    url   String
    extension String?
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

## service

```ts
import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { PrismaService } from "../../prisma/prisma.service";
import { CreatePostDto, PostDto, UpdatePostDto } from "./post.dto";

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}
  // update 시
  async update(id: string, data: UpdatePostDto) {
    const updated = await this.prisma.$transaction(async tx => {
      // snapshot table에 저장
      const found = await tx.post.findUnique({
        where: { id },
      });
      if (!found) {
        throw new Error("not found");
      }
      await tx.postSnapshot.create({
        data: {
          postId: found.id,
          ...found,
        },
      });
      // update
      const updated = await tx.post.update({
        where: { id },
        data,
      });
      return updated;
    });
    return plainToInstance(PostDto, updated);
  }

  async remove(id: string) {
    await this.prisma.$transaction(async tx => {
      // snapshot table에 저장
      const found = await tx.post.findUnique({
        where: { id },
      });
      if (!found) {
        throw new Error("not found");
      }
      await tx.postSnapshot.create({
        data: {
          postId: found.id,
          ...found,
        },
      });
      // delete
      await tx.post.delete({
        where: { id },
      });
    });
  }
}
```
