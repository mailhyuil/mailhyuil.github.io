# cafe24 components product-payment-info

## html

```html
<script src="/product/components/product-payment-info/index.js?pledadsedplddedddddaddsed" defer></script>
<!-- 구매정보 -->
<div module="product_additional" class="product-payment-info">
  <!--결제 정보-->
  <div class="clickable dep-cursor-pointer hover:dep-text-gray-500 dep-transition-colors dep-duration-500">
    <div class="dep-py-3 dep-flex dep-justify-between">
      <h3>결제 정보</h3>
      <app-icon class="dep-size-5 dep-text-gray-500" name="heroicons:chevron-down-20-solid"></app-icon>
    </div>
    <div class="content dep-leading-loose dep-hidden dep-p-2 dep-text-gray-500">{$payment_info}</div>
    <div class="dep-h-0.5 dep-w-full dep-bg-gray-100"></div>
  </div>
  <!--배송 정보-->
  <div class="clickable dep-cursor-pointer hover:dep-text-gray-500 dep-transition-colors dep-duration-500">
    <div class="dep-py-3 dep-flex dep-justify-between">
      <h3>배송 정보</h3>
      <app-icon class="dep-size-5 dep-text-gray-500" name="heroicons:chevron-down-20-solid"></app-icon>
    </div>
    <div class="content dep-leading-loose dep-hidden dep-p-2 dep-text-gray-500">
      <ul>
        <li>배송 방법 : {$shipping_method}</li>
        <li>배송 지역 : {$shipping_area}</li>
        <li>배송 비용 : {$shipping_fee}</li>
        <li>배송 기간 : {$shipping_period}</li>
        <li>배송 정보 : {$shipping_info}</li>
      </ul>
    </div>
    <div class="dep-h-0.5 dep-w-full dep-bg-gray-100"></div>
  </div>
  <!--교환/반품 정보-->
  <div class="clickable dep-cursor-pointer hover:dep-text-gray-500 dep-transition-colors dep-duration-500">
    <div class="dep-py-3 dep-flex dep-justify-between">
      <h3>교환 및 반품 정보</h3>
      <app-icon class="dep-size-5 dep-text-gray-500" name="heroicons:chevron-down-20-solid"></app-icon>
    </div>
    <div class="content dep-leading-loose dep-hidden dep-p-2 dep-text-gray-500">{$exchange_info}</div>
    <div class="dep-h-0.5 dep-w-full dep-bg-gray-100"></div>
  </div>
  <!--환불 정보-->
  <div class="clickable dep-cursor-pointer hover:dep-text-gray-500 dep-transition-colors dep-duration-500">
    <div class="dep-py-3 dep-flex dep-justify-between">
      <h3>환불 정보</h3>
      <app-icon class="dep-size-5 dep-text-gray-500" name="heroicons:chevron-down-20-solid"></app-icon>
    </div>
    <div class="content dep-leading-loose dep-hidden dep-p-2 dep-text-gray-500">{$refund_info}</div>
    <div class="dep-h-0.5 dep-w-full dep-bg-gray-100"></div>
  </div>
  <!--서비스문의 정보-->
  <div
    class="clickable dep-cursor-pointer hover:dep-text-gray-500 dep-transition-colors dep-duration-500 {$service_info|display}"
  >
    <div class="dep-py-3 dep-flex dep-justify-between">
      <h3>서비스문의 정보</h3>
      <app-icon class="dep-size-5 dep-text-gray-500" name="heroicons:chevron-down-20-solid"></app-icon>
    </div>
    <div class="content dep-leading-loose dep-hidden dep-p-2 dep-text-gray-500">{$service_info}</div>
    <div class="dep-h-0.5 dep-w-full dep-bg-gray-100"></div>
  </div>
</div>
```

## js

```js
(function () {
  const ele = document.querySelector(".product-payment-info");
  const clickables = ele.querySelectorAll(".clickable");
  clickables.forEach(clickable => {
    clickable.addEventListener("click", () => {
      const content = clickable.querySelector(".content");
      const isHidden = content.classList.contains("dep-hidden");
      if (isHidden) {
        content.classList.remove("dep-hidden");
      } else {
        content.classList.add("dep-hidden");
      }
    });
  });
})();
```
