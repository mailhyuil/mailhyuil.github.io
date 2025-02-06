```html
<div id="purchase-info" class="tab-content">
  <div class="guide">
    <div class="guide__box">
      <div class="relative guide__title">상품 결제 정보</div>
      <div class="guide__content">{$payment_info}</div>
    </div>
    <div class="guide__box">
      <div class="relative guide__title">배송 안내</div>
      <div class="guide__content">
        <ul class="info delivery">
          <li>배송 방법 : {$shipping_method}</li>
          <li>배송 지역 : {$shipping_area}</li>
          <li>배송 비용 : {$shipping_fee}</li>
          <li>배송 기간 : {$shipping_period}</li>
          <li>배송 안내 : {$shipping_info}</li>
        </ul>
      </div>
    </div>
    <div class="guide__box">
      <div class="relative guide__title">교환/반품 안내</div>
      <div class="guide__content">{$exchange_info}</div>
    </div>
  </div>
</div>
```
