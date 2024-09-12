# OAuth

## prisma

```prisma
model User {
    id        String    @id @db.Uuid
    username  String    @unique @db.VarChar(255)
    email     String    @unique @db.VarChar(255)
    password  String    @db.VarChar(255)
    authentications Authentication[]
}

model Authentication {
    id        String   @id @db.Uuid
    provider  String   @db.VarChar(255)
    providerId String  @db.VarChar(255)
    user      User     @relation(fields: [userId], references: [id])
    userId    String   @db.Uuid
}
```

## service

```ts
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async findOrCreateUser(provider: string, providerId: string, username: string, email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      await this.prisma.authentication.create({
        data: {
          provider,
          providerId,
          user: { connect: { id: user.id } },
        },
      });
      return user;
    }

    return this.prisma.user.create({
      data: {
        username,
        email,
        authentications: {
          create: {
            provider,
            providerId,
          },
        },
      },
    });
  }
}
```
