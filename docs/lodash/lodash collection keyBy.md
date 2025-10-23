# lodash collection keyBy

```js
const arr = [
  { dir: "left", code: 97 },
  { dir: "right", code: 100 },
];

keyBy(arr, function (o) {
  return String.fromCharCode(o.code);
});
// { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

keyBy(arr, "dir");
// { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
```
