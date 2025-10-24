# js error cause

> 에러를 유발한 다른 에러를 지목하는 옵션
>
> > error를 wrap할 때 사용

```js
// wrap
const error1 = new Error("Error one");
const error2 = new Error("Error two", { cause: error1 });

// unwrap
const error1 = error2.cause;
```
