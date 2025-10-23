# ArrayBuffer to String

```js
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf)); // or Uint8Array
}
```

# String to ArrayBuffer

```js
// string을 ArrayBuffer 만들어주는 함수
function str2ab(str: any) {
  const buf = new ArrayBuffer(str.length); // convert string to arrayBuffer
  const view = new Uint8Array(buf); // create uint8array or uint16array as viewer /// Uint === Unsigned Int (0 ~ 255)

  // convert to octet 0xff = 255 (16진수)
  for (let i = 0; i < str.length; i++) {
    view[i] = str.charCodeAt(i) & 0xff; // & 은 비트 연산 : str.charCodeAt(i)의 범위를 0 ~ 255로 제한 (8비트)
  }

  return buf;
}
```
