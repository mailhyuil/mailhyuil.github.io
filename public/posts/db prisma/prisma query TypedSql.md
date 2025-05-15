# prisma query TypedSql

## /prisma/sql/getUsersWithPosts.sql

```sql
SELECT u.id, u.name, COUNT(p.id) as "postCount"
FROM "User" u
LEFT JOIN "Post" p ON u.id = p."authorId"
GROUP BY u.id, u.name
```

## generate

```sh
prisma generate --sql
# or
prisma generate --sql --watch
```

## ts

```ts
import { getUsersWithPosts } from "@prisma/client/sql";

const usersWithPostCounts = await this.prisma.$queryRawTyped(getUsersWithPosts());
```
