# js Map

```js
const map = new Map();

map.set("key", "str1"); // 문자형 키
map.get("key"); // 'str1'
map.size; // 1
map.delete("key"); // true
map.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});
```
