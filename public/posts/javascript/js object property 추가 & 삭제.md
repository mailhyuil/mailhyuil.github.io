# object key, value 추가

```js
// 추가
obj[newKey] = newValue;
Object.assign(obj, { [newKey]: newValue });
Object.defineProperty(obj, newKey, { value: newValue, writable: true, enumerable: true, configurable: true });

// 삭제
delete object.key;
```
