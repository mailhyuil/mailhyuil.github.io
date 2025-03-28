# postgres event sourcing

> user table과 user_event table을 만들어서 event sourcing을 구현

## user table

```sql
create table user (
  id serial primary key,
  name varchar(255) not null,
  email varchar(255) not null,
  password varchar(255) not null,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);
```

## user_event table

```sql
create table user_event (
  id serial primary key,
  user_id int not null,
  event_type varchar(255) not null,
  event_data jsonb not null,
  created_at timestamp not null default now()
);
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
      switch (cur.eventType) {
        case "user_create":
        case "user_update":
          return cur.eventData;
        case "user_delete":
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
        eventType: "user_create",
        eventData: created,
      },
    });
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    await this.prisma.userEvent.create({
      data: {
        userId: id,
        eventType: "user_update",
        eventData: data,
      },
    });
  }

  async delete(id: string) {
    await this.prisma.userEvent.create({
      data: {
        userId: id,
        eventType: "user_delete",
        eventData: {},
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
        switch (cur.eventType) {
          case "user_create":
          case "user_update":
            return cur.eventData;
          case "user_delete":
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
