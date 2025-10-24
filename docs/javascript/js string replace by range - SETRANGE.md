# js string replace by range - SETRANGE

```js
function setRange(str, start, end, substitute) {
  return str.substring(0, start) + substitute + str.substring(end);
}

const str = "this is a string";
const newString = setRange(str, 0, 4, "that");
```
