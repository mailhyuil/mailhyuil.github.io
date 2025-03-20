# css hidden

> display:none;을 사용하면 dom에서는 제거되지 않지만 레이아웃에서 제외됨 화면 reflow가 발생
>
> > visibility:hidden;을 사용하면 렌더트리에는 존재하나 Paint 단계에서 처리함
> >
> > > 성능을 위해서 opacity를 사용하는 것이 좋음
> > >
> > > pointer-events: none;을 사용해서 이벤트를 막을 수 있음

```css
.hidden {
  opacity: 0;
  pointer-events: none;
}
```
