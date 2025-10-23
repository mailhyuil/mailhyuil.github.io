# webapi navigator serviceWorker

## usage

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
```

## service-worker.js

```js
// This code executes in its own worker or thread
self.addEventListener("install", event => {
  console.log("Service worker installed");
});
self.addEventListener("activate", event => {
  console.log("Service worker activated");
});
```

## lifecycle

> register -> install -> activate-> fetch
>
> > install: 페이지를 처음 방문 시 install 이벤트 발생, 페이지 자산을 캐시한다.
> >
> > > activate: 이벤트가 발생하고 서비스 워커가 제어권을 갖는다, pusy 및 sync 같은 함수를 사용할 수 있다.
> > >
> > > > fetch : 서비스워커를 설치 완료 후 캐시된 응답을 반환받음. (캐시를 fetch)

```js
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function () {
        console.log("ServiceWorker registration successful");
      })
      .catch(function (err) {
        console.log("ServiceWorker registration failed: ", err);
      });
  });
}
```
