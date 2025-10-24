# event addEventListener & removeEventListener

> 반드시 removeEventListener를 사용하여 이벤트를 제거해야 한다.
>
> addEventListener에 등록한 핸들러 함수와 완전히 동일해야만 이벤트 핸들러를 제거할 수 있다.

```js
function handler() {
  alert("Hello from " + event.target.tagName); // Hello from H1
}

ele.addEventListener("click", handler);

onDestroy(){
  ele.removeEventListener("click", handler)
};
```
