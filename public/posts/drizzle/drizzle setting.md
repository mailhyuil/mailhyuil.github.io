# drizzle setting

## install

```sh
npm i postgres
npm i drizzle-orm
npm i -D drizzle-kit
```

## schema.ts

```ts
import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  role: text("role").$type<"admin" | "customer">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
```

## drizzle.config.ts

```ts
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
} satisfies Config;
```

## generate

```sh
drizzle-kit generate:pg
```
