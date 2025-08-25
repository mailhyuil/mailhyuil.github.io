# angular swiper virtual slide

> 보이지 않는 slide를 dom에 추가하지 않고 swiper 내부적으로 관리하다가 보일 때 추가하는 방식

```ts
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  virtual: {
    slides: Array.from({ length: 1000 }, (_, i) => `Slide ${i + 1}`),
  },
});
```
