# prisma json

> json은 기본으로 배열이 될 수 있다.

```prisma
image Json   @default("{}")
image Json[] @default("[]")

image Json[] @db.JsonB x
image Json   @db.JsonB o
```
