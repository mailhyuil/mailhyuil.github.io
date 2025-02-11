# event DOMContentLoaded (init library)

> DOM Tree가 완성되었을 때 발생하는 이벤트
>
> > dom을 사용하는 라이브러리를 초기화할 때는 DOM이 완성되어 있어야 하기 때문에 이 이벤트 발생 이후에 초기화를 해야한다.
> >
> > > 이벤트가 등록되기 전 이미 DOM이 완성되어 이벤트가 발생했다면 이 이벤트는 발생하지 않는다
> > >
> > > 이때는 readyState를 사용하는게 좋다.

```js
document.addEventListener("DOMContentLoaded", () => {
  // init library
});
```
