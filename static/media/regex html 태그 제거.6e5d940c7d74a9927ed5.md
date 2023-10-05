# regex html 태그 제거

```ts
const removeImgTag = (content) => {
  const newContent = content.replace(/<[^>]*>?/g, "");
  return newContent;
};
```
