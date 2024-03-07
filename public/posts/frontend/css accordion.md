# css accordion

> max-height로 애니메이션을 주기
>
> > max-height가 너무 커버리면 작아지기까지 시간이 너무 걸림
> >
> > > 크기를 딱 맞추려면 전체 container의 scrollHeight를 넣어줘야함
> > >
> > > > clientHeight 대신 scrollHeight를 써야 작아져있는 상태에서도 전체 크기를 알 수 있음

```css
.accordion {
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.5s;
}

.accordion.active {
  max-height: 9999px;  <- container의 scrollHeight
}
```
