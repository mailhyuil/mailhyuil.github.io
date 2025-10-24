# prisma type GetPayload - relation이 포함된 entity type

```ts
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

type UserWithCars = Prisma.UserGetPayload<{
  include: {
    cars: true;
  };
}>;

const usersWithCars = await prisma.user.findMany({
  include: {
    cars: true,
  },
});
```
