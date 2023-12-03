# event sourcing with postgresql

> user table과 user_event table을 만들어서 event sourcing을 구현

## schema.prisma

```prisma
model User {
  id        Int      @id @default(uuid())
  name      String
  email     String
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model UserEvent {
  id        Int      @id @default(uuid())
  userId    Int
  type String
  data Json
  createdAt DateTime @default(now())
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
