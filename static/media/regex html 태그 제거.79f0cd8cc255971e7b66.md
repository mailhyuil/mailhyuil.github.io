# removeHtmlTag regex

```
const removeImgTag = (content) => {
  const newContent = content.replace(/<[^>]*>?/g, "");
  return newContent;
};
```
