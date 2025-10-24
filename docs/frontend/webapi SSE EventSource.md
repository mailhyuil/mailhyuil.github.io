# webapi SSE EventSource

> server-sent events를 위한 인터페이스
>
> > HTTP/2를 사용하지 않으면 6개의 연결만 가능하다.

```js
const sse = new EventSource("/api/v1/sse");

sse.onopen = (e) => {
  console.log(e);
};
sse.onmessage = (e) => {
  console.log(e.data);
};
sse.error = (e) => {
  console.log(e);
};
```
