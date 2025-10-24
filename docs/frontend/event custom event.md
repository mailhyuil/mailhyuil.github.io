# event custom event

> event 생성 객체로 생성
>
> > addEventListener로 이벤트 콜백함수 정의
> >
> > > dispatchEvent(customEvent)로 이벤트를 실행시킬 수 있다.

```js
// 버블링이 일어나면서 document에서 이벤트가 처리됨
document.addEventListener("hello", function (event) {
  alert("Hello from " + event.target.tagName); // Hello from H1
});

// 이벤트(hello)를 만들고 elem에서 이벤트 디스패치
const event = new Event("hello1", { bubbles: true });
const mouseEvent = new MouseEvent("hello2", { bubbles: true });
const customEvent = new CustomEvent("hello3", { detail: { name: "hyuil" } });

elem.dispatchEvent(event);
elem.dispatchEvent(mouseEvent);
elem.dispatchEvent(customEvent);
```
