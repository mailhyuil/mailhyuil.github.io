# event DOMContentLoaded

> DOM Tree가 완성되었을 때 발생하는 이벤트 (HTML의 parsing이 끝나고 deferred script와 type="module" script가 다운로드 완료 후 실행된 이후에 발생)
>
> DomContentLoaded는 스타일시트, 이미지, iframe의 다운로드는 기다리지 않는다
>
> 하지만 deferred script는 스타일시트를 기다리기 때문에 deferred 내에 포함된 스타일시트는 DOMContentLoaded 이전에 다운로드된다.
>
> > DOM을 사용하는 라이브러리를 초기화할 때는 DOM이 완성되어 있어야 하기 때문에 이 이벤트 발생 이후에 초기화를 해야한다.
> >
> > > 이벤트가 등록되기 전 이미 DOM이 완성되어 이벤트가 발생했다면 이 이벤트는 발생하지 않는다 (이때는 readyState를 사용하는게 좋다.)
> > >
> > > > 멀티 페이지 앱 또는 SSR 에서는 domcontentloaded 이벤트 전에 페이지가 그려지고, SPA에서는 후에 그려진다.

```js
document.addEventListener("DOMContentLoaded", () => {
  // init library
});
```
