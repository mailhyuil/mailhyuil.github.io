# cafe24 module breadcrumb

```html
<div module="product_additional">
  <!-- 구매안내 -->
  <div>
    <div module="product_detaildesign">
      <!--
        $cache = no
      -->
      <table border="1" summary="">
        <caption>상품 상세 정보</caption>
        <colgroup>
          <col style="width:100px" />
          <col style="width:auto" />
        </colgroup>
        <tbody>
          <tr class="{$item_display|display}">
            <th>{$item_title}</th>
            <td>{$item_content}</td>
          </tr>
          <tr class="{$item_display|display}">
            <th>{$item_title}</th>
            <td>{$item_content}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="faq">
      <div class="toggle eToggle selected">
        <div class="title">
          <h3>결제 안내</h3>
        </div>
        <div class="contents">{$payment_info}</div>
      </div>
      <div class="toggle eToggle selected">
        <div class="title">
          <h3>배송 안내</h3>
        </div>
        <div class="contents">
          <ul>
            <li>배송 방법 : {$shipping_method}</li>
            <li>배송 지역 : {$shipping_area}</li>
            <li>배송 비용 : {$shipping_fee}</li>
            <li>배송 기간 : {$shipping_period}</li>
            <li>배송 안내 : {$shipping_info}</li>
          </ul>
        </div>
      </div>
      <div class="toggle eToggle selected">
        <div class="title">
          <h3>교환/반품 안내</h3>
        </div>
        <div class="contents">{$exchange_info}</div>
      </div>
      <div class="toggle eToggle selected">
        <div class="title">
          <h3>환불 안내</h3>
        </div>
        <div class="contents">{$refund_info}</div>
      </div>
      <div class="toggle eToggle selected {$service_info|display}">
        <div class="title">
          <h3>서비스문의 안내</h3>
        </div>
        <div class="contents">{$service_info}</div>
      </div>
    </div>
  </div>
</div>
```
