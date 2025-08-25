# prisma json null

> 빈 객체 {} 를 넣어주기

```prisma
Prisma.DbNull // === {}
```

## null && 빈 오브젝트 check

```ts
if (json && Object.keys(json).length > 0) {
}
```
