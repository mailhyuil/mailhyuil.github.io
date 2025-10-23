# js await Promise catch

```js
const res = await fetch("url").catch((err) => {
  console.error(err);
  return err;
});
```
