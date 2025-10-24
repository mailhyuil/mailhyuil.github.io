# prisma update relation - PUT 방식일 때

```ts
private async updateSomeRelation(
  tx: Prisma.TransactionClient,
  productId: string,
  existing: Some[],
  somes: CreateSomeDTO[],
) {
  const map = new Map(existing.map((i) => [i.id, i]));
  for (const some of somes) {
    if (!some.id) {
      // id가 없으면 새로 생성
      await tx.some.create({
        data: {
          ...some,
          product: {
            connect: { id: productId },
          },
        },
      });
    } else if (map.has(some.id)) {
      // id가 있고 CreateDTO가 있으면 업데이트
      await tx.some.update({
        where: { id: some.id },
        data: some,
      });
    } else {
      // id가 있고 CreateDTO가 없으면 삭제
      await tx.some.delete({
        where: { id: some.id },
      });
    }
  }
}
```
