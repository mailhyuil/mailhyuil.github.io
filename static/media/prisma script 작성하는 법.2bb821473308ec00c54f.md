# prisma script 작성하는 법

## update.ts

```ts
import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";

const prisma = new PrismaClient({
  datasourceUrl: "postgresql://postgres:password@ip_address:5432/mydb?schema=public",
});

async function main() {
  await prisma.registration.updateMany({
    where: {
      status: "ACTIVE",
      class: {
        type: {
          in: ["LIVE", "LIVE_AND_RECORDED"],
        },
      },
    },
    data: {
      endedAt: dayjs().add(100, "years").toDate(),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

## 실행

```sh
ts-node update.ts
```
