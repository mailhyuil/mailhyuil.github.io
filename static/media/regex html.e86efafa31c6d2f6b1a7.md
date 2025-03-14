# regex html

> /<[^>]\*>?/g

```ts
const removeImgTag = (content) => {
  const newContent = content.replace(/<[^>]*>?/g, "");
  return newContent;
};
```
