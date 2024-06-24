# addEventListener & removeEventListener

> 반드시 removeEventListener를 사용하여 이벤트를 제거해야 한다.
>
> > 메모리 누수가 발생할 수 있다.

```js
function handler() {
  alert("Hello from " + event.target.tagName); // Hello from H1
}

elem.addEventListener("click", handler);

onDestroy(){
  elem.removeEventListener("click", handler)
};
```
