# x event sourcing postgresql

> user table과 user_event table을 만들어서 event sourcing을 구현

## schema.prisma

```prisma
model User {
  id        String      @id @default(uuid())
  name      String
  email     String
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  posts     Post[]
}

model UserEvent {
  id        String      @id @default(uuid())
  userId    Int
  type String
  data Json
  createdAt DateTime @default(now())

  postEvents PostEvent[]
}

model Post {
  id        Int      @id @default(uuid())
  title     String
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: Cascade)
  userId    String
}

model PostEvent {
  id        Int      @id @default(uuid())
  postId    Int
  type String
  data Json
  createdAt DateTime @default(now())

  userEvent UserEvent @relation(fields: [userEventId], references: [id], onDelete: Cascade, onUpdate: Cascade)
  userEventId String
}
```

## prisma

```ts
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async findById(id: string) {
    const events = await this.prisma.userEvent.findMany({
      where: {
        userId: id,
      },
    });
    const user = events.reduce((acc, cur) => {
      switch (cur.type) {
        case "user:create":
        case "user:update":
          return cur.data;
        case "user:delete":
          return null;
      }
    }, null);
    return user;
  }

  async create(user: Prisma.UserCreateInput) {
    const created = await this.prisma.user.create({
      data: user,
    });
    await this.prisma.userEvent.create({
      data: {
        userId: created.id,
        type: "user:create",
        data: created,
      },
    });
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    await this.prisma.userEvent.create({
      data: {
        userId: id,
        type: "user:update",
        data: data,
      },
    });
  }

  async delete(id: string) {
    await this.prisma.userEvent.create({
      data: {
        userId: id,
        type: "user:delete",
        data: {},
      },
    });
  }

  async snapshot(id: string) {
    await this.prisma.$transaction(async (tx) => {
      const events = await tx.userEvent.findMany({
        where: {
          userId: id,
        },
      });

      const user = events.reduce((acc, cur) => {
        switch (cur.type) {
          case "user:create":
          case "user:update":
            return cur.data;
          case "user:delete":
            return null;
        }
      }, null);

      await tx.user.update({
        where: {
          id,
        },
        data: user,
      });

      await tx.userEvent.deleteMany({
        where: {
          userId: id,
        },
      });
    });
  }
}
```
