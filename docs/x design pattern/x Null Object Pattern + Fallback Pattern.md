# x Null Object Pattern + Fallback Pattern

> null object를 fallback으로 사용

```js
const nullUser: User = {
  id: undefined,
  name: "Guest",
  email: undefined,
};

function createPost(data: CreatePostDTO, user: User = nullUser) { // user 인자를 안넣거나 undefined로 넣으면 nullUser가 사용됨
  const created = await this.prisma.post.create({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      userId: user.id,
    },
  });

  console.log(`Post created by ${user.name}`)

  return plainToClass(PostDTO, created);
}
```
