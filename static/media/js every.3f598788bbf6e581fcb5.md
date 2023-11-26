# js every

> forEach문을 사용해서 validate를 하지말고 every를 사용해라
>
> > 전부 return true면 true를 리턴 하나라도 false면 false 리턴

```js
const isEveryPassedValidate = arr.every((i) => {
  if (i === "NO") {
    return false;
  }
  return true;
});

if (!isEveryPassedValidate) return false;
```
