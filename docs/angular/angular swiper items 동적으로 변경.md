# angular swiper items 동적으로 변경

> if문을 사용해서 show를 false로 설정해서 items를 변경하고 다시 show를 true로
>
> > changeDetection을 해주기 위해서 setTimeout 내에서 show를 true로 변경함

## ts

```ts
this.show = false;
this.items = items;
setTimeout(() => {
  this.show = true;
});
```

## html

```html
<swiper-container *ngIf="show"> ... </swiper-container>
```
