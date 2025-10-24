# prisma query stream

## custom stream

```ts
import { Readable } from "stream";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface StreamReportsOptions {
  batchSize: number;
}

export function streamReports({ batchSize }: StreamReportsOptions): Readable {
  let cursorId: number = undefined;
  return new Readable({
    objectMode: true,
    highWaterMark: batchSize,
    async read() {
      try {
        const items = await prisma.report.findMany({
          take: batchSize,
          skip: cursorId ? 1 : 0,
          cursor: cursorId ? { id: cursorId } : undefined,
          where: {
            processed: false,
          },
        });
        for (const item of items) {
          this.push(item);
        }
        if (items.length < batchSize) {
          this.push(null);
          return;
        }
        cursorId = items[items.length - 1].id;
      } catch (err) {
        this.destroy(err);
      }
    },
  });
}
```

## usage

```ts
for await (const user of streamUsers({ batchSize: 100 })) {
  console.log(user);
}
```
