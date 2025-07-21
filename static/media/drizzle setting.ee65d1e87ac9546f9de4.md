# drizzle setting

## install

```sh
npm i drizzle-orm
npm i -D drizzle-kit

npm i pg
npm i -D @types/pg
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

## generate migration file

```sh
drizzle-kit generate:pg
```

## main.ts

```ts
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const connectionString = "...";
const sql = postgres(connectionString, { max: 1 });
const db = drizzle(sql);

await migrate(db, { migrationsFolder: "drizzle" });

await sql.end();
```
