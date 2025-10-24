# cafe24 module product_setproduct - 세트상품

```html
<div module="product_setproduct">
  <!--
    $use_per_add_option = yes
  -->
  <h3>세트상품</h3>
  <ul>
    <li>
      <div>
        <div>
          <!--섬네일-->
          <a href="/product/detail.html?product_no={$product_no}">
            <img src="{$product_image}" alt="" id="{$image_id}" />
          </a>
        </div>
        <p title="상품명">
          <a href="{$link_bind_product_detail}">{$product_name}</a>
          <span class="info {$set_quantity_display|display}">({$set_quantity}개씩 구매되는 상품)</span>
        </p>
        <p class="{$product_price_display|display}" title="판매가">
          <span class="{$product_price_del}">{$product_price}{$product_tax_type_text}</span>
        </p>
        <p class="{$product_sale_price_display|display}" title="할인판매가">{$product_sale_price}</p>
        <div class="stock">
          <span class="gLabel {$stock_quantity_display|display}">
            <a href="#none" class="btnNormal sizeS" {$bind_stock_quantity}>재고수량보기</a>
          </span>
          <span class="{$product_restock_button_display|display}">
            <a href="#none" class="btnNormal sizeS" {$product_restock_link}>재입고 알림 SMS</a>
          </span>
        </div>
        <button type="button" id="eProductDetailInfo_{$product_no}">추가정보</button>
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
              <span class="name">상품선택</span>
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
            <strong class="length">0</strong>
            /{$option_maxlength})
          </span>
        </li>
        <li class="{$add_option_push_button_display|display} selectButton" id="{$add_option_push_button_id}">
          <a href="#none" class="btnSubmit sizeS" onclick="{$add_action_push_button}">옵션선택</a>
        </li>
      </ul>
      <div class="guide">
        <p class="qty {$product_min_display|display}">
          (최소주문수량 {$product_min}개 이상
          <span class="{$product_max_display|display}">/ 최대주문수량 {$product_max}개 이하</span>
          )
        </p>
        <div class="sizeGuide {$size_guide_display|display}">
          <a href="#none" class="{$size_guide_class}" product_no="{$product_no}">
            사이즈 가이드
            <i aria-hidden="true" class="icon icoArrowRight"></i>
          </a>
        </div>
      </div>
      <div class="description" id="product_description_{$product_no}"></div>
    </li>
    <li>
      <div class="information">
        <div class="thumbnail">
          <a href="/product/detail.html?product_no={$product_no}">
            <img src="{$product_image}" alt="" id="{$image_id}" />
          </a>
        </div>
        <p class="name" title="상품명">
          <a href="{$link_bind_product_detail}">{$product_name}</a>
          <span class="info {$set_quantity_display|display}">({$set_quantity}개씩 구매되는 상품)</span>
        </p>
        <p class="price {$product_price_display|display}" title="판매가">
          <span class="{$product_price_del}">{$product_price}{$product_tax_type_text}</span>
        </p>
        <p class="salePrice {$product_sale_price_display|display}" title="할인판매가">{$product_sale_price}</p>
        <div class="stock">
          <span class="gLabel {$stock_quantity_display|display}">
            <a href="#none" class="btnNormal sizeS" {$bind_stock_quantity}>재고수량보기</a>
          </span>
          <span class="{$product_restock_button_display|display}">
            <a href="#none" class="btnNormal sizeS" {$product_restock_link}>재입고 알림 SMS</a>
          </span>
        </div>
        <button type="button" class="btnNormal sizeS btnInfo eProductDetailInfo" id="eProductDetailInfo_{$product_no}">
          추가정보
        </button>
      </div>
      <ul class="option">
        <li module="product_option">
          <ul>
            <li>
              <span class="name">{$option_name}</span>
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
              <span class="name">상품선택</span>
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
      <div class="guide">
        <p class="qty {$product_min_display|display}">
          (최소주문수량 {$product_min}개 이상
          <span class="{$product_max_display|display}">/ 최대주문수량 {$product_max}개 이하</span>
          )
        </p>
        <div class="sizeGuide {$size_guide_display|display}">
          <a href="#none" class="{$size_guide_class}" product_no="{$product_no}">
            사이즈 가이드
            <i aria-hidden="true" class="icon icoArrowRight"></i>
          </a>
        </div>
      </div>
      <div class="description" id="product_description_{$product_no}"></div>
    </li>
  </ul>
  <dl module="product_quantity" class="ec-base-desc quantity">
    <dt>수량</dt>
    <dd>
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
    </dd>
  </dl>
</div>
```
