# prisma transaction

```ts
await this.prismaService.$transaction(async (tx) => {
  const found = await tx.post.create({ data });
});
```
