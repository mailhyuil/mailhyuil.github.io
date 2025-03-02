# webapi navigator sendBeacon

> Beacon(신호등) API는 비동기적으로 서버로 데이터를 전송
>
> > POST 요청을 비동기적으로 보내는 방법
> >
> > > 사용자가 페이지를 떠나도 네트워크 요청을 보낼 수 있음

```ts
document.addEventListener("visibilitychange", function logData() {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```
