# 람다 prisma

## zip 파일생성

```sh
#!/bin/sh

set -eux

rm -rf lambda.zip

zip --symlinks -r lambda.zip index.js prisma/schema.prisma node_modules/@prisma/client node_modules/.pnpm/@prisma+client*

du -b ./lambda.zip
```

## 코드

```ts
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.handler = async (event, context, callback) => {
  try {
    const posts = await prisma.post.findMany({
      include: { author: true },
    });
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(posts),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(error),
    };
  }
};
```
