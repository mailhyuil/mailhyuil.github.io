# prisma transaction

> The code is using an async function in the map method to create views, which returns a promise. However, the transaction is not waiting for the completion of all promises before closing.
>
> > map내에서 async를 사용하면 Promise배열을 리턴 Promise.all()으로 한번에 실행해줘야함

## tx 사용 안함

```ts
const manyLogics = [
  this.prismaService.post.create(...),
  this.prismaService.image.create(...),
  this.prismaService.image.delete(...),
  ...
]

await this.prismaService.$transaction(updateMany);
```

## tx 사용

> 재사용 불가?

```ts
  async create(userId: string, data: CreateWebComplexAndWebComplexViewsDTO) {
    const { complex, views } = data;

    return await this.prismaService.$transaction(async (tx) => {
      const created = await tx.webComplex.create({ data: { ...complex, auth: { connect: { id: userId } } } });
      const promises = views?.map((view) => {
        return tx.webComplexView.create({ data: { ...view, webComplex: { connect: { id: created.id } } } });
      });
      await Promise.all(promises);
    });
  }
```
