# nest WebView Server

> user device 내의 WebView에 nodejs 서버를 띄워서 사용하는 방법
>
> > webview, web browser 등은 js로 동작하기 때문에 polyfill을 사용하여 nodejs 서버를 띄울 수 있다.
> >
> > > sqlite, indexedDB 등을 사용하여 데이터를 저장할 수 있다.

```txt
번들링 타임 디펜던시 설정
polyfill (process 등)
nodejs 내부 클래스 재정의
serverFactory override
```
