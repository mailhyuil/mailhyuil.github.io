# history

> 브라우저의 히스토리를 담고있는 객체
>
> > 스택 자료구조

## replace

> 세션 기록 스택의 제일 최근 항목을 교체
>
> > 뒤로가기를 할 때 다시 페이지가 나오는 것을 방지

## pushState & popstate

> 상태를 history에 저장

```js
history.pushState(null, "", `?page=${page}`);

window.addEventListener("popstate", function (event) {
  const page = route.params.page;
  if (!page) {
    emit("update:modelValue", 1);
  } else {
    emit("update:modelValue", page);
  }
});
```
