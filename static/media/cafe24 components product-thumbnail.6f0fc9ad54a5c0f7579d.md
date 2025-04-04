# cafe24 components product-thumbnail

## html

```html
<!--@css(/__dep__/lib/css/swiper.css)-->
<!--@js(/__dep__/lib/js/swiper.js)-->
<!--@js(/product/components/product-thumbnail/index.js)-->

<div module="product_detail" class="dep-w-full">
  <div class="dep-flex dep-gap-2 dep-w-full dep-flex-col-reverse md:dep-flex-row">
    <div module="product_addimage">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">{$add_img}</li>
        <li class="swiper-slide">{$add_img}</li>
      </ul>
    </div>
    <div class="swiper-container dep-relative dep-group dep-w-full" module="product_image">
      <ul class="swiper-wrapper">
        <li class="swiper-slide"><img src="{$big_img}" alt="" /></li>
        {$aAddImage}
      </ul>
      <!--navigation-->
      <div
        class="dep-absolute -dep-translate-y-1/2 dep-left-5 dep-top-1/2 swiper-button-prev dep-opacity-0 group-hover:dep-opacity-100 dep-transition-all dep-duration-500"
      >
        <app-icon
          class="dep-text-black dep-size-10 hover:dep-cursor-pointer"
          name="heroicons:chevron-left-16-solid"
        ></app-icon>
      </div>
      <div
        class="dep-absolute -dep-translate-y-1/2 dep-right-5 dep-top-1/2 swiper-button-next dep-opacity-0 group-hover:dep-opacity-100 dep-transition-all dep-duration-500"
      >
        <app-icon
          class="dep-text-black dep-size-10 hover:dep-cursor-pointer"
          name="heroicons:chevron-right-16-solid"
        ></app-icon>
      </div>
    </div>
  </div>
</div>
```

## js

```js
const swiper = new Swiper(".swiper-container", {});
```
