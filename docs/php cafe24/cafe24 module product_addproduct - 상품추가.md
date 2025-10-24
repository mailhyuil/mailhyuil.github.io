# cafe24 module product_addproduct - 상품추가

```html
<div module="product_addproduct">
  <!--
    $use_per_add_option = yes
  -->
  <div class="title">
    <h3>
      추가 구성 상품
      <span class="txtInfo">추가로 구매를 원하시면 선택하세요.</span>
    </h3>
    <a href="#self" class="toggle">
      <i aria-hidden="true" class="icon icoArrowBottom"></i>
      추가구성상품 닫기
    </a>
  </div>
  <ul class="product">
    <li class="flex">
      <div class="thumbnail">
        <a href="{$link_product_detail}"><img src="{$product_image}" alt="" id="{$image_id}" /></a>
      </div>
      <div class="add-prd-info">
        <div class="information">
          <p class="name" title="상품명">{$product_name}</p>
          <p class="salePrice {$product_sale_price_display|display}" title="할인판매가">{$product_sale_price}</p>
          <p class="price {$product_price_display|display}" title="판매가">
            <span class="{$product_price_del}">{$product_price}{$product_tax_type_text}</span>
          </p>
        </div>
        <ul class="option">
          <li module="product_option">
            <ul>
              <li>
                <strong class="name">{$option_name}</strong>
                {$form.option}
                <p class="value">{$option_desc}</p>
              </li>
              <li module="product_quantity">
                <div class="ec-base-qty">
                  {$form.quantity}
                  <a href="javascript:;" class="up qtyUp eClearUp">
                    <img
                      id="{$quantity_up_id}"
                      class="{$quantity_up_class}"
                      alt="up"
                      src="//img.echosting.cafe24.com/skin/mobile/common/ico_quantity_up.jpg"
                      width="33"
                      height="29"
                    />
                  </a>
                  <a href="javascript:;" class="down qtyDown eClearDown">
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
              </li>
            </ul>
          </li>
          <li module="product_noneoption">
            <ul>
              <li>
                <strong class="name">상품선택</strong>
                {$form.noneoption}
              </li>
              <li module="product_quantity">
                <div class="ec-base-qty">
                  {$form.quantity}
                  <a href="javascript:;" class="up qtyUp eClearUp">
                    <img
                      id="{$quantity_up_id}"
                      class="{$quantity_up_class}"
                      alt="up"
                      src="//img.echosting.cafe24.com/skin/mobile/common/ico_quantity_up.jpg"
                      width="33"
                      height="29"
                    />
                  </a>
                  <a href="javascript:;" class="down qtyDown eClearDown">
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
              </li>
            </ul>
          </li>
          <li module="product_addoption">
            <span class="name">{$add_option_name}</span>
            {$form.add_option}
            <span class="txtByte" title="현재글자수/최대글자수">
              (
              <span class="length">0</span>
              /{$option_maxlength})
            </span>
          </li>

          <li class="{$add_option_push_button_display|display} selectButton" id="{$add_option_push_button_id}">
            <a href="#none" class="btnSubmit sizeS" onclick="{$add_action_push_button}">옵션선택</a>
          </li>
        </ul>
      </div>
    </li>
    <li class="flex">
      <div class="thumbnail">
        <a href="{$link_product_detail}"><img src="{$product_image}" alt="" id="{$image_id}" /></a>
      </div>
      <div class="add-prd-info">
        <div class="information">
          <p class="name" title="상품명">{$product_name}</p>
          <p class="salePrice {$product_sale_price_display|display}" title="할인판매가">{$product_sale_price}</p>
          <p class="price {$product_price_display|display}" title="판매가">
            <span class="{$product_price_del}">{$product_price}{$product_tax_type_text}</span>
          </p>
        </div>
        <ul class="option">
          <li module="product_option">
            <ul>
              <li>
                <strong class="name">{$option_name}</strong>
                {$form.option}
                <p class="value">{$option_desc}</p>
              </li>
              <li module="product_quantity">
                <div class="ec-base-qty">
                  {$form.quantity}
                  <a href="javascript:;" class="up qtyUp eClearUp">
                    <img
                      id="{$quantity_up_id}"
                      class="{$quantity_up_class}"
                      alt="up"
                      src="//img.echosting.cafe24.com/skin/mobile/common/ico_quantity_up.jpg"
                      width="33"
                      height="29"
                    />
                  </a>
                  <a href="javascript:;" class="down qtyDown eClearDown">
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
              </li>
            </ul>
          </li>
          <li module="product_noneoption">
            <ul>
              <li>
                <strong class="name">상품선택</strong>
                {$form.noneoption}
              </li>
              <li module="product_quantity">
                <div class="ec-base-qty">
                  {$form.quantity}
                  <a href="javascript:;" class="up qtyUp eClearUp">
                    <img
                      id="{$quantity_up_id}"
                      class="{$quantity_up_class}"
                      alt="up"
                      src="//img.echosting.cafe24.com/skin/mobile/common/ico_quantity_up.jpg"
                      width="33"
                      height="29"
                    />
                  </a>
                  <a href="javascript:;" class="down qtyDown eClearDown">
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
              </li>
            </ul>
          </li>
          <li module="product_addoption">
            <span class="name">{$add_option_name}</span>
            {$form.add_option}
            <span class="txtByte" title="현재글자수/최대글자수">
              (
              <span class="length">0</span>
              /{$option_maxlength})
            </span>
          </li>

          <li class="{$add_option_push_button_display|display} selectButton" id="{$add_option_push_button_id}">
            <a href="#none" class="btnSubmit sizeS" onclick="{$add_action_push_button}">옵션선택</a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</div>
```
