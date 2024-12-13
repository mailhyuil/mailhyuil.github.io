# prisma index unique

> 유니크, 복합 유니크를 생성하면 자동으로 인덱스, 복합 인덱스도 생성된다.

```ts
@unique
@unique(sort: Desc)
@@unique([author, created_at(sort: Desc)])
```
