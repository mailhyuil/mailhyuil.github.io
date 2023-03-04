# prisma transaction

```ts
try {
  await this.prismaService.$transaction([
    this.prismaService.post.deleteMany({ where: { userId: id } }),
    this.prismaService.user.delete({ where: { id } }),
  ]);
} catch (error) {
  console.error(error);
}
```
