# Blob to Stream

```js
blob
  .stream()
  .getReader()
  .read()
  .then(result => {
    console.log(result);
  });
```
