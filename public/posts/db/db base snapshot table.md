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

## controller

```ts
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreatePostDto } from "./post.dto";
import { PostService } from "./post.service";

@Controller({ path: "posts", version: "1" })
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async findAll() {
    return await this.postService.findAll();
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return await this.postService.findById(id);
  }

  @Post()
  async create(@Body() body: CreatePostDto) {
    return await this.postService.create(body);
  }

  @Post(":id")
  async put(@Param("id") id: string, @Body() body: CreatePostDto) {
    return await this.postService.create(body, id);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    await this.postService.remove(id);
  }
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
  constructor(private readonly prismaService: PrismaService) {}
  async findAll() {
    const found = await this.prismaService.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        snapshots: {
          take: 1,
          orderBy: {
            createdAt: "desc",
          },
          select: {
            postId: true,
            title: true,
            content: true,
            createdAt: true,
            attachments: {
              select: {
                id: true,
                url: true,
              },
            },
          },
        },
      },
    });

    return plainToInstance(
      PostDto,
      found.map((post) => post.snapshots[0])
    );
  }
  async findById(id: string) {
    const [found] = await this.prismaService.post
      .findUniqueOrThrow({
        where: { id },
      })
      .snapshots({
        take: 1,
        orderBy: {
          createdAt: "desc",
        },
        select: {
          postId: true,
          title: true,
          content: true,
          createdAt: true,
          attachments: {
            select: {
              id: true,
              url: true,
            },
          },
        },
      });
    return plainToInstance(PostDto, found);
  }

  async create(data: CreatePostDto, id?: string) {
    const created = await this.prismaService.postSnapshot.create({
      data: {
        ...data,
        post: {
          create: id ? undefined : {},
          connect: id ? { id } : undefined,
        },
      },
    });
    return plainToInstance(PostDto, created);
  }

  // patch update 시
  async update(id: string, data: UpdatePostDto) {
    const updated = await this.prismaService.$transaction(async (tx) => {
      const [found] = await tx.post
        .findUniqueOrThrow({
          where: { id },
        })
        .snapshots({
          take: 1,
          orderBy: {
            createdAt: "desc",
          },
          select: {
            title: true,
            content: true,
            attachments: {
              select: {
                id: true,
              },
            },
          },
        });
      const updated = await this.prismaService.postSnapshot.create({
        data: {
          title: found.title,
          content: found.content,
          ...data,
          post: {
            connect: { id },
          },
        },
        select: {
          postId: true,
          title: true,
          content: true,
          createdAt: true,
          attachments: {
            select: {
              id: true,
              url: true,
            },
          },
        },
      });
      return updated;
    });
    return plainToInstance(PostDto, updated);
  }

  async remove(id: string) {
    await this.prismaService.post.delete({
      where: { id },
    });
  }
}
```
