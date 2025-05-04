# webapi opener

> window.open()메소드로 열린 윈도우에서 이전 창을 참조

```js
window.open("http://www.naver.com", "naver");
window.opener.location.href = "http://www.daum.net";
window.opener.postMessage("hello", "*");
```
