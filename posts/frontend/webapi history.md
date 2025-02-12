# history

> 브라우저의 히스토리를 담고있는 객체
>
> > 스택 자료구조
> >
> > > 대부분의 SPA 라우팅은 history 객체를 사용한다.

## replace

> 세션 기록 스택의 제일 최근 항목을 교체
>
> > 뒤로가기를 할 때 다시 페이지가 나오는 것을 방지

## pushState & replaceState

> 상태를 history에 저장
>
> > history.pushState(stateObj, unused, url?)
> >
> > > unused: 브라우저가 무시하는 값
> > > unused는 생략이 안된다 그냥 빈 스트링 ""을 넣어주는게 일반적이다.

```js
const stateObj = { pageNo: 1 };
history.pushState(stateObj, "", `url`);
history.replaceState(stateObj, "", `url`);
```

## popstate

```js
window.addEventListener("popstate", function (event) {
  const page = route.params.page;
  if (!page) {
    emit("update:modelValue", 1);
  } else {
    emit("update:modelValue", page);
  }
});
```
