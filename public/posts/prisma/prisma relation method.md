# prisma retrieve relations

> find 후 posts() 호출

```js
const postsByUser: Post[] = await prisma.user.findUnique({ where: { email: "ada@prisma.io" } }).posts();
```
