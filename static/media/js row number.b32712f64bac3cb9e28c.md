# js row number

```ts
const postsWithRow = posts.map((p, index) => {
  p["row"] = count - option.pageSize * (option.pageNo - 1) - index;
  return p;
});
```
