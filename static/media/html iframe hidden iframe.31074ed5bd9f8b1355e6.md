# html iframe hidden iframe

> iframe을 숨기는 방법
>
> > iframe을 숨기고 이 frame내에서는 Hidden Frame Streaming, 분리된 환경에서의 작업 (분리된 도메인에서의 서버 요청) 등의 작업을 할 수 있다.
> >
> > 호스트와 postMessage로 통신할 수 있으며 sandbox가 아닌 경우 document.top를 호스트 조작할 수 있음
> >
> > js가 disabled된 환경에서 js를 대신 실행해주는 역할을 할 수 있음

```html
<iframe src="http://www.mailhyuil.com/session" title="" aria-hidden="true" tabindex="-1" style="display:none;"></iframe>

<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
    height="0"
    width="0"
    style="display:none;visibility:hidden"
  ></iframe>
</noscript>
```
