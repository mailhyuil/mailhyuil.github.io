# js sort() by string

```js
for (const group in groupedResult) {
  groupedResult[group].sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;
  });
}
```
