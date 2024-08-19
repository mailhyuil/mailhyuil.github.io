# swiper slidesPerView 동적으로 변경

> slidesPerView는 items.length >= slidesPerView \* 2 로 유지해야 loop 모드가 작동한다.
>
> > params로 접근해서 변경
> >
> > > slidesPerView \* 2 보다 items가 적으면 items를 2배로 늘려주는 방법도 있다.
> > >
> > > e.g. if(items.length < 2)

```ts
const length = this.items.length;
this.swiper.params.slidesPerView = length >= 8 ? undefined : Math.floor(length / 2);
```
