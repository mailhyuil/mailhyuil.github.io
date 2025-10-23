# angular swiper marquee

## options

```ts
const swiperOptions: SwiperOptions = {
  slidesPerView: "auto",
  spaceBetween: 0,
  speed: 4000,
  loop: true,
  autoplay: {
    delay: 0,
    reverseDirection: true,
  },
};
```

## scss

```scss
swiper-slide {
  max-width: max-content;
}

::part(wrapper) {
  transition-timing-function: linear !important;
}
```
