# nodejs Error cause

> 에러를 유발한 다른 에러를 지목하는 옵션

```js
const error1 = new Error("Error one");
const error2 = new Error("Error two", { cause: error1 });
```
