# js AbortController

> 비동기 작업을 중단시키는 controller
>
> > 오래걸리는 비동기 작업을 취소시하는 버튼등을 만들 수 있다.

```js
const abortController = new AbortController(); // 1
const abortSignal = abortController.signal; // 2

fetch("http://example.com", {
  signal: abortSignal, // 3
}).catch(({ message }) => {
  // 5
  console.log(message);
});

abortController.abort(); // 4
```
