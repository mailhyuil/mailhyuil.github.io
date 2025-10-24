# html script type

> 브라우저가 script를 자동으로 esmodule로 인식한다.
>
> defer script 와 똑같이 동작한다.
>
> > type="module" 스크립트와 내부에 import된(lazy import 제외) 스크립트를 전부 다운로드 받고 실행되어야 DOMContentLoaded 이벤트가 발생한다.

```html
<script type="module" src="bundle.js"></script>
```
