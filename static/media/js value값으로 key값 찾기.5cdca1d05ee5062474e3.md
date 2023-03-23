# js 값으로 키 찾기

```js
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
```
