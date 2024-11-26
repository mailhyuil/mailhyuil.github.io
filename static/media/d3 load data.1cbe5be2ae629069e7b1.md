# d3 load data

```js
// async await
const data = await d3.csv("/path/to/file.csv");
console.log(data);

// or
d3.json("/path/to/file.json").then((data) => {
  console.log(data);
});
```
