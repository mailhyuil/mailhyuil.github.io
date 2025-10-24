# cafe24 components product-action

## html

```html
<script src="/product/components/product-action/index.js?pledadsedplddedddddaddsed" defer></script>

<div module="product_additional" class="dep-hidden">
  <div module="product_detaildesign">
    <!--
      출력 갯수 지정 변수, 없으면 설정된 전체가 나옵니다.
      count = 10
      -->
    <dl class="{$item_class} spec">
      <dt class="{$item_display|display}" data-item_title>{$item_title}</dt>
      <dd class="{$item_display|display}" data-item_content>{$item_content}</dd>
    </dl>
  </div>
</div>

<!--style을 변경하세요-->
<div class="dep-flex dep-flex-col dep-gap-5 dep-p-5">
  <!-- 상품 정보 -->
  <div class="dep-flex dep-flex-col dep-gap-5">
    <div>
      <h1 id="product_name_css"></h1>
    </div>
    <div class="dep-flex dep-gap-2 dep-items-center">
      <p id="product_custom_css" class="dep-line-through dep-text-red-400"></p>
      <p id="product_price_css" class="dep-text-xl dep-font-bold"></p>
    </div>
    <div class="dep-flex dep-gap-2 dep-flex-col">
      <p id="delivery_css"></p>
      <p id="delivery_title_css"></p>
      <p id="delivery_price_css"></p>
    </div>
  </div>

  <!-- 일반 추가 -->
  <div>
    <div module="product_option">
      <div module="product_option">
        <div>{$option_name}</div>
        <div>{$form.option}</div>
      </div>
      <div module="product_addoption">
        <div>{$add_option_name}</div>
        <div>
          {$form.add_option}
          <span class="byte" title="현재글자수/최대글자수">
            [
            <strong class="length">0</strong>
            / {$option_maxlength} ]
          </span>
        </div>
      </div>
      <div class="{$quantity_display|display}">
        <div class="dep-flex dep-items-center dep-gap-2">
          <p>수량</p>
          {$form.quantity}
          <div class="dep-flex dep-items-center dep-gap-1">
            <button type="button" class="{$quantity_up_class}">
              <app-icon
                class="dep-size-5 dep-text-gray-700 hover:dep-text-gray-300"
                name="heroicons:plus-16-solid"
              ></app-icon>
            </button>
            <button type="button" class="{$quantity_down_class}">
              <app-icon
                class="dep-size-5 dep-text-gray-700 hover:dep-text-gray-300"
                name="heroicons:minus-16-solid"
              ></app-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 세트 상품 -->
  <div class="productSet normal" module="product_setproduct">
    <ul class="product">
      <li>
        <div class="information">
          <p class="name">
            {$product_name}
            <span class="qty">({$set_quantity}개씩 구매되는 상품)</span>
          </p>
        </div>
        <div class="option">
          <table border="1">
            <caption>옵션 정보</caption>
            <colgroup>
              <col style="width: 105px" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr module="product_addoption">
                <th scope="row">{$add_option_name}</th>
                <td>
                  {$form.add_option}
                  <span class="byte" title="현재글자수/최대글자수">
                    [
                    <strong class="length">0</strong>
                    / {$option_maxlength} ]
                  </span>
                </td>
              </tr>
              <tr module="product_option">
                <th scope="row">{$option_name}</th>
                <td>{$form.option}</td>
              </tr>
              <tr module="product_noneoption">
                <th scope="row">상품선택</th>
                <td>{$form.noneoption}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
      <li>
        <div class="information">
          <p class="name">
            {$product_name}
            <span class="qty">({$set_quantity}개씩 구매되는 상품)</span>
          </p>
        </div>
        <div class="option">
          <table border="1">
            <caption>옵션 정보</caption>
            <colgroup>
              <col style="width: 105px" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr module="product_addoption">
                <th scope="row">{$add_option_name}</th>
                <td>
                  ] {$form.add_option}
                  <span class="byte" title="현재글자수/최대글자수">
                    [
                    <strong class="length">0</strong>
                    / {$option_maxlength} ]
                  </span>
                </td>
              </tr>
              <tr module="product_option">
                <th scope="row">{$option_name}</th>
                <td>{$form.option}</td>
              </tr>
              <tr module="product_noneoption">
                <th scope="row">상품선택</th>
                <td>{$form.noneoption}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    </ul>
  </div>
  <!-- 추가 상품 -->
  <div class="productSet normal" module="product_addproduct">
    <strong class="title toggle"><span>추가구성상품</span></strong>
    <ul class="product">
      <li>
        <div class="information">
          <p class="name">{$product_name}</p>
          <p class="price {$product_price_del}">{$product_price}</p>
          <p class="salePrice {$product_sale_price_display|display}">{$product_sale_price}</p>
        </div>
        <div class="option">
          <table border="1">
            <caption>옵션 정보</caption>
            <colgroup>
              <col style="width: 105px" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr module="product_addoption">
                <th scope="row">{$add_option_name}</th>
                <td>
                  {$form.add_option}
                  <span class="byte" title="현재글자수/최대글자수">
                    [
                    <strong class="length">0</strong>
                    / {$option_maxlength} ]
                  </span>
                </td>
              </tr>
              <tr module="product_option">
                <th scope="row">{$option_name}</th>
                <td>{$form.option}</td>
              </tr>
              <tr module="product_noneoption">
                <th scope="row">상품선택</th>
                <td>{$form.noneoption}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
      <li>
        <div class="information">
          <p class="name">{$product_name}</p>
          <p class="price {$product_price_del}">{$product_price}</p>
          <p class="salePrice {$product_sale_price_display|display}">{$product_sale_price}</p>
        </div>
        <div class="option">
          <table border="1">
            <caption>옵션 정보</caption>
            <colgroup>
              <col style="width: 105px" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr module="product_addoption">
                <th scope="row">{$add_option_name}</th>
                <td>
                  {$form.add_option}
                  <span class="byte" title="현재글자수/최대글자수">
                    [
                    <strong class="length">0</strong>
                    / {$option_maxlength} ]
                  </span>
                </td>
              </tr>
              <tr module="product_option">
                <th scope="row">{$option_name}</th>
                <td>{$form.option}</td>
              </tr>
              <tr module="product_noneoption">
                <th scope="row">상품선택</th>
                <td>{$form.noneoption}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    </ul>
  </div>
  <!-- total price -->
  <div id="{$total.total_id}" class="{$total.total_display|display}">
    <div class="dep-flex dep-justify-between dep-items-center">
      <h3>TOTAL</h3>
      <div class="{$total.total_cnt}">
        <span class="dep-text-xl">0</span>
        <span class="dep-text-gray-500">(0개)</span>
      </div>
    </div>
  </div>
  <!-- actions -->
  <div module="product_action">
    <div class="{$action_display|display} dep-flex dep-gap-2">
      <button
        type="button"
        class="{$basket_display|display} dep-flex-1 dep-bg-black dep-text-white dep-bg-font-bold dep-rounded-lg dep-py-2"
        onclick="{$action_basket}"
      >
        장바구니
      </button>
      <a
        href="#none"
        class="{$buy_display|display} dep-flex-1 dep-bg-font-bold dep-outline dep-outline-gray-100 dep-rounded-lg dep-py-2 dep-flex dep-justify-center"
        onclick="{$action_buy}"
      >
        <span id="{$btn_buy_mobile_id}">구매하기</span>
        <span class="{$btn_reserve_class|display}" id="{$btn_reserve_mobile_id}">예약주문</span>
      </a>
    </div>
    <div class="{$action_soldout_display|display}">
      <button type="button" class="{$soldout_display|display}">품절</button>
      <button type="button" class="{$wishlist_display|display}" onclick="{$action_wishlist}" id="actionWishSoldout">
        관심상품
      </button>
    </div>
  </div>
</div>
```

## js

```js
(function () {
  const specElements = document.querySelectorAll(".spec");
  const specData = Array.from(specElements).reduce((acc, item) => {
    const cls = item.classList[0]; // 첫 번째 클래스명을 키로 사용
    const key = item.querySelector("dt")?.textContent?.trim() || ""; // null 안전성 체크
    const value = item.querySelector("dd")?.textContent?.trim() || "";
    acc[cls] = { key, value };
    return acc;
  }, {});

  function updateProductActionElements(ids) {
    ids.forEach(id => {
      const ele = document.getElementById(id);
      if (!ele) return; // 요소가 존재하지 않으면 건너뜀
      const data = specData[id];
      if (!data) return; // 데이터가 없으면 건너뜀
      ele.textContent = ele.classList.contains("key") ? data.key : data.value;
    });
  }

  const elementIds = [
    "product_name_css",
    "product_custom_css",
    "product_price_css",
    "delivery_css",
    "delivery_price_css",
    "delivery_title_css",
  ];
  updateProductActionElements(elementIds);
})();
```
