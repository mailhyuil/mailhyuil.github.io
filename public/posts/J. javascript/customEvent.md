# customEvent

> event 생성 객체로 생성
>
> > addEventListener로 이벤트 콜백함수 정의
> >
> > > dispatchEvent(customEvent)로 이벤트를 실행시킬 수 있다.

```js
const btn = document.querySelector("h1");

const myEvent = new CustomEvent("hi", {
  detail: {
    message: "hi",
    sex: "yeahhh",
  },
});

btn.addEventListener("hi", (e) => {
  console.log(e);
});

btn.dispatchEvent(myEvent);
```
