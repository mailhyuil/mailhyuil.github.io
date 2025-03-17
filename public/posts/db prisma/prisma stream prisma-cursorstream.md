# prisma-cursorstream

## install

```sh
npm install prisma-cursorstream
```

## settings

```ts
import { PrismaClient } from "@prisma/client";
import cursorStream from "prisma-cursorstream";

const db = new PrismaClient().$extends(cursorStream);
```

## usage

```ts
const stream = db.post.cursorStream({
  // Your usual findMany args
  select: {
    id: true,
    title: true,
  },
  where: {
    published: true,
  },
});

for await (const post of stream) {
  console.log(post); // {id: 1, title: 'Hello!'}
}
```
