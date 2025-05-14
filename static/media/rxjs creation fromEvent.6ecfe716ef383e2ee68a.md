# fromEvent

> 이벤트로부터 observable 객체 생성
>
> > event.target을 감싼 래퍼 객체를 생성

```js
const button = document.querySelector("button");

const button = fromEvent(button, "click");

button.subscribe(() => console.log("button clicked"));
```
