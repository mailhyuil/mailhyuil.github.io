# prisma satisfies

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
