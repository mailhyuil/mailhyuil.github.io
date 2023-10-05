# text nodes 제거

```js
nodes?.forEach((i) => {
  if (i.nodeType === Node.TEXT_NODE) i.remove();
});
```
