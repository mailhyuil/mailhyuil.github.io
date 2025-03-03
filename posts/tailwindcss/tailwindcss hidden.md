# tailwindcss hidden

> display:none;을 사용하면 렌더트리에서 완전이 없애버림
>
> > 이로 인해 다시 visible로 만들면 요소 내부의 요청을 다시 보내는 문제가 있음
> >
> > > visibility:hidden;을 사용하면 렌더트리에는 존재하나 Paint 단계에서 처리함
> > >
> > > 성능을 위해서 opacity를 사용하는 것이 좋음
> > >
> > > pointer-events: none;을 사용해서 이벤트를 막을 수 있음

```txt
opacity-0 pointer-events-none
```
