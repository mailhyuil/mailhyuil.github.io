# js row number

```ts
const entitiesWithRow = entities.map((p, index) => {
  p["row"] = count - option.pageSize * (option.pageNo - 1) - index;
  return p;
});
```
