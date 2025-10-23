# js function fallback parameter

> fallback을 설정해주면 인자를 안넣거나 undefined로 넣으면 fallback이 사용됨
>
> > null을 넣을 경우에는 null이 넘어온다.

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
