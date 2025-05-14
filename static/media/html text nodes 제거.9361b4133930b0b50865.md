# text nodes 제거

> childNodes를 사용하면 text node도 포함되어 있음
>
> > 그냥 children을 사용하자
> >
> > > 불가피하게 childNodes를 사용해야 한다면 밑은 방법으로 제거

```js
nodes?.forEach((i) => {
  if (i.nodeType === Node.TEXT_NODE) i.remove();
});
```
