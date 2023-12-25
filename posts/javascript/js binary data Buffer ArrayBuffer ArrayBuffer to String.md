# ArrayBuffer to String

```js
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf)); // or Uint8Array
}
```
