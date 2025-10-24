# ui 마우스 우클릭 context menu

> contextmenu 이벤트 사용
> contextmenu 이벤트는 마우스 우클릭 시 발생하는 이벤트이다.
>
> > 왼쪽 마우스 클릭 시 contextmenu를 제거하는 이벤트를 추가해야 한다.

## 구현

```js
document.addEventListener("contextmenu", handleCreateContextMenu, false);
document.addEventListener("click", handleClearContextMenu, false);
```
