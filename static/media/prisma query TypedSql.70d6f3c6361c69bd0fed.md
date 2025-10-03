# prisma query TypedSql

> GROUP BY & HAVING, 여러번 JOIN, 윈도우 함수, 집계 함수, CTE 쿼리, WITH RECURSIVE, Set Operations, Subquery 사용 시에는 TypedSql을 사용하자.

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
