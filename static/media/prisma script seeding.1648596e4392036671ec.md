# prisma script seeding

## seed.ts

```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // .. 로직 작성
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
ts-node seed.ts
```

## 자동실행

> package.json에 추가

```json
{
  "prisma": {
    // commonjs일 경우
    "seed": "ts-node prisma/seed.ts",
    // esmodule 일 경우
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  }
}
```
