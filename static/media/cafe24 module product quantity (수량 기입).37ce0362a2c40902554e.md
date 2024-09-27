# cafe24 module product_quantity (수량 기입)

```html
<dl module="product_quantity">
  <dt>수량</dt>
  <dd>
    <div>
      {$form.quantity}
      <a href="javascript:;">
        <!-- 수량 up -->
        <img
          id="{$quantity_up_id}"
          class="{$quantity_up_class}"
          alt="up"
          src="//img.echosting.cafe24.com/skin/mobile/common/ico_quantity_up.jpg"
          width="33"
          height="29"
        />
      </a>
      <a href="javascript:;">
        <!-- 수량 down -->
        <img
          id="{$quantity_down_id}"
          class="{$quantity_down_class}"
          alt="down"
          src="//img.echosting.cafe24.com/skin/mobile/common/ico_quantity_down.jpg"
          width="33"
          height="29"
        />
      </a>
    </div>
  </dd>
</dl>
```
