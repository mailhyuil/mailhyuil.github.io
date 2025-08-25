# js base64

> atob : ascii(base64) to binary
>
> > btoa : binary to ascii(base64)

```js
const encodedData = btoa("Hello, world"); // binary to ascii(base64) // Hello, world를 binary로 변환하고 그걸 base64로 인코딩
const decodedData = atob(encodedData); // 문자열 디코딩 // base64를 binary로 디코딩하고 그걸 문자열로 변환
```
