# css accordion

> max-height를 0px에서 9999px로 올려라
>
> > auto나 max-content 등은 안먹힘

```css
.accordion {
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.5s;
}

.accordion.active {
  max-height: 9999px;
}
```
