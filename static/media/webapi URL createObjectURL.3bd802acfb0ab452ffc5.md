# js URL

> document내에 오브젝트를 저장하고 그것을 참조하는 URL을 생성

```js
const blob = new Blob(["Hello, world!"], { type: "text/plain" });
const url = URL.createObjectURL(blob);
```
