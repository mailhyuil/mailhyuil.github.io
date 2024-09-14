# event DOMContentLoaded (init library)

> DOM Tree가 완성되었을 때 발생하는 이벤트
>
> > dom을 사용하는 라이브러리를 초기화할 때는 DOM이 완성되어 있어야 하기 때문에 이 이벤트 발생 이후에 초기화를 해야한다.

```js
document.addEventListener("DOMContentLoaded", () => {
  // init library
});
```
