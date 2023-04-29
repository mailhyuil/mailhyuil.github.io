# prisma row number

```
const entities = await this.prismaService.$queryRaw`
      SELECT ${count}  + 1 - "row_number"() over (ORDER BY "createdAt" DESC) as row, web.*
      FROM (SELECT "WebPost".*, "Auth"."name"
          FROM "WebPost"
          LEFT JOIN "Auth" ON "authId" = "Auth"."id"
          ORDER BY "WebPost"."createdAt" DESC) AS web
      WHERE "category"::text = ${option.category}
      AND ("title" LIKE ${"%" + option.query + "%"}
      OR "content" LIKE ${"%" + option.query + "%"})
      LIMIT ${option.pageSize} OFFSET ${(option.pageNo - 1) * option.pageSize}`;
```
