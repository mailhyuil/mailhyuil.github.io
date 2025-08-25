# js array flatMap

> map을 한번 하고 깊이 1의 flat()을 한번 하는 것과 같다.
>
> > 배열안의 배열을 map할 때 사용하면 좋다.

```js
const usersPosts = [[post1, post2, post3], [post1], [post1], [post1, post2], [post1, post2, post3]];

const allPosts = usersPosts.flatMap((posts) => {
  return posts;
});
```
