# cafe24 module product_detail product_image - 이미지

> product_detail 모듈내에서 사용
>
> > swiper와 함께 사용

## html

```html
<div module="product_image">
  <div class="flex flex-col gap-2">
    <div class="relative">
      <!-- for SEO ?? -->
      <!-- <div data-src="{$big_img}">
            <a href="#" alt="{$product_code}">
              <img src="{$big_img}" alt="{$seo_alt_tag}" class="{$big_img_class} {$img_display|display}" />
              <span module="product_Imagestyle">
                <span class="prdIcon {$icon_class_name}" style="background-image: url('{$icon_url}')"></span>
              </span>
            </a>
          </div> -->
      <div class="swiper-container" module="product_image">
        <ul class="swiper-wrapper">
          <li class="swiper-slide"><img src="{$big_img}" alt="" /></li>
          {$aAddImage}
        </ul>
        <div class="thumb-slide-pager jsThumbSlidePager"></div>
      </div>
      <!--navigation-->
      <div class="absolute -translate-y-1/2 left-5 top-1/2 swiper-button-prev">prev</div>
      <div class="absolute -translate-y-1/2 right-5 top-1/2 swiper-button-next">next</div>
    </div>
    <!--슬라이더-->
    <div module="product_addimage">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">{$add_img}</li>
        <li class="swiper-slide">{$add_img}</li>
      </ul>
    </div>
  </div>
</div>
```

## js

```js
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
```
