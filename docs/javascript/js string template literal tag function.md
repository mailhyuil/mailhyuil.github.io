# js string template literal tag function

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
```
