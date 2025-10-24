# js utils value값으로 key값 찾기

```js
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
```
