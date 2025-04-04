# js 한글 깨짐 utf-8 인코딩

> formData를 사용할 때 originalname이 latin1으로 인코딩되어 깨지는 현상이 발생
>
> > buffer(binary)로 디코딩 후 다시 utf-8로 다시 인코딩

```js
const encodedString = Buffer.from(originalName, "latin1").toString("utf-8");
```
