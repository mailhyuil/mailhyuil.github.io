# postgresql row number

> row_number() over(ORDER BY "field")

```sql
SELECT (SELECT COUNT(*) FROM "WebPost") + 1 - "row_number"() over (ORDER BY "createdAt" DESC) as row, web.* FROM (SELECT "WebPost".*, "Auth"."name" FROM "WebPost" LEFT JOIN "Auth" ON "authId" = "Auth"."id"  ORDER BY "WebPost"."createdAt" ) AS web WHERE "category" = 'HIRING' AND ("title" LIKE '%%' OR "content" LIKE '%%') LIMIT 10 OFFSET 0
```
