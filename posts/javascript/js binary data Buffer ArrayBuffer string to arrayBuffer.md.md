# ArrayBuffer String to ArrayBuffer

```js
// string을 ArrayBuffer 만들어주는 함수
function s2ab(s: any) {
  const buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
  const view = new Uint8Array(buf); //create uint8array as viewer
  for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff; //convert to octet
  return buf;
}
```
