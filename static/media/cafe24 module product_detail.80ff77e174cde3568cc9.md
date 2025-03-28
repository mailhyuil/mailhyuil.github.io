# cafe24 module product_detail

```html
<div module="product_detail">
  <!--
    $coupon_download_page = /coupon/coupon_productdetail.html
  -->
  <div module="product_image">
    <div>
      <div>
        <div data-src="{$big_img}">
          <a href="#" alt="{$product_code}">
            <img src="{$big_img}" alt="{$seo_alt_tag}" class="{$big_img_class} {$img_display|display}" />
            <span module="product_Imagestyle">
              <span class="{$icon_class_name}" style="background-image: url('{$icon_url}')"></span>
            </span>
          </a>
        </div>
        <div module="product_image">
          <ul>
            <li><img src="{$big_img}" /></li>
            {$aAddImage}
          </ul>
        </div>
        <div>
          prev
          <!--@import(/__dep__/icon/icon_arrow_left_wb.html)-->
        </div>
        <div>
          next
          <!--@import(/__dep__/icon/icon_arrow_right_wb.html)-->
        </div>
      </div>

      <div module="product_addimage">
        <div>
          <ul>
            <li>{$add_img}</li>
            <li>{$add_img}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div
    data-name="{$name|striptag}"
    data-desc="{$summary_desc}"
    data-price="{$product_price}"
    data-custom="{$product_custom|replace:.00,}"
    data-prd-no="{$product_no}"
  >
    <div>
      <div data-prd-name="{$name}">
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div data-count="{$review_count}">
                    <div>
                      <!--@import(/__dep__/icon/icon_review_star.html)-->
                    </div>
                    <div>
                      리뷰
                      <span>{$review_count|numberformat}</span>
                      건
                    </div>
                  </div>
                  <div>
                    <h1>
                      {$name}
                      <span>
                        {$soldout_icon} {$stock_icon} {$recommend_icon} {$new_icon} {$product_icons}
                        {$today_arrival_icon} {$pickup_icon} {$benefit_icons}
                      </span>
                    </h1>
                  </div>
                  <div class="{$simple_desc_display|display}">{$simple_desc}</div>

                  <div module="product_detaildesign">
                    <div class=" {$item_display|display} {$item_class}">
                      <div>{$item_content}</div>
                    </div>
                    <div class=" {$item_display|display} {$item_class}">
                      <div>{$item_content}</div>
                    </div>
                    <div>
                      쿠폰 받기
                      <!--@import(/__dep__/icon/icon_download.html)-->
                    </div>
                  </div>
                </div>

                <!-- 이벤트 -->
                <div df-banner-code="detail-benefit">
                  <a href="{#href}" target="{#target}" df-banner-clone>
                    <div>{#item}</div>
                    <div>{#title}</div>
                    <!--@import(/__dep__/icon/icon_arrow_right.html)-->
                  </a>
                </div>

                <div module="product_detaildesign">
                  <!--
                    출력 갯수 지정 변수, 없으면 설정된 전체가 나옵니다.
                    count = 10
                  -->
                  <table border="1">
                    <caption>{$name} 기본 정보</caption>
                    <tbody>
                      <tr class="{$item_display|display} {$item_class}">
                        <th scope="row">{$item_title}</th>
                        <td>{$item_content}</td>
                      </tr>
                      <tr class="{$item_display|display} {$item_class}">
                        <th scope="row">{$item_title}</th>
                        <td>{$item_content}</td>
                      </tr>
                      <tr class="installment displaynone">
                        <th scope="row">무이자 할부</th>
                        <td>
                          <div class="relative installment__btn">카드 자세히 보기</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- 정기배송 -->
              <div class="{$regular_delivery_display|display}">
                <table border="1" summary="정기결제">
                  <caption>정기결제</caption>
                  <tbody>
                    <tr>
                      <th scope="row">구매방법</th>
                      <td>
                        <label>{$regular_deliveryF} 1회구매</label>
                        <label>
                          {$regular_deliveryT} 정기배송
                          <span class="{$regular_delivery_discount_display|display}">
                            {$max_discount_value}
                            <i>할인</i>
                          </span>
                        </label>
                      </td>
                    </tr>
                    <tr class=" {$regular_cycle_period|display}" id="{$regular_cycle_period_id}">
                      <th>배송주기</th>
                      <td>
                        {$regularPeriod}

                        <div class="{$regular_delivery_discount_display|display}" id="{$regular_delivery_discount_id}">
                          <p>
                            <strong>정기배송 할인</strong>
                            <span>save</span>
                          </p>
                          <ul module="product_regularDiscount">
                            <li>
                              {$discount_count} 결제 시 : {$discount_value}
                              <span>할인</span>
                            </li>
                            <li>
                              {$discount_count} 결제 시 : {$discount_value}
                              <span>할인</span>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <table border="1" module="product_option">
                  <!--
                    $use_per_add_option = yes
                  -->
                  <caption>상품 옵션</caption>
                  <tbody module="product_option">
                    <tr>
                      <th scope="row">{$option_name}</th>
                      <td>
                        {$form.option}
                        <p>{$option_desc}</p>
                      </td>
                    </tr>
                    <tr module="product_quantity">
                      <th scope="row">수량</th>
                      <td>
                        <div>
                          {$form.quantity}
                          <a href="javascript:;">
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
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr module="product_addoption">
                      <th scope="row">{$add_option_name}</th>
                      <td>
                        {$form.add_option}
                        <span title="현재글자수/최대글자수">
                          (
                          <strong>0</strong>
                          /{$option_maxlength})
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr class="{$option_push_button_display|display}" id="{$option_push_button_id}">
                      <td colspan="2">
                        <a href="#none" onclick="{$action_push_button}">옵션선택</a>
                      </td>
                    </tr>
                    <tr module="product_fileoption">
                      <th scope="row">{$file_option_name}</th>
                      <td>
                        {$form.file_option}
                        <ul>
                          <li>- 파일은 최대 5개까지 {$file_option_limit}M 이하로 개별업로드 가능합니다.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div module="product_addproduct">
                <!--
                  $use_per_add_option = yes
                -->
                <div>
                  <h3>
                    추가 구성 상품
                    <span>추가로 구매를 원하시면 선택하세요.</span>
                  </h3>
                  <a href="#self">
                    <i aria-hidden="true"></i>
                    추가구성상품 닫기
                  </a>
                </div>
                <ul>
                  <li>
                    <div>
                      <a href="{$link_product_detail}"><img src="{$product_image}" alt="" id="{$image_id}" /></a>
                    </div>
                    <div>
                      <div>
                        <p title="상품명">{$product_name}</p>
                        <p class=" {$product_sale_price_display|display}" title="할인판매가">{$product_sale_price}</p>
                        <p class=" {$product_price_display|display}" title="판매가">
                          <span class="{$product_price_del}">{$product_price}{$product_tax_type_text}</span>
                        </p>
                      </div>
                      <ul>
                        <li module="product_option">
                          <ul>
                            <li>
                              <strong>{$option_name}</strong>
                              {$form.option}
                              <p>{$option_desc}</p>
                            </li>
                            <li module="product_quantity">
                              <div>
                                {$form.quantity}
                                <a href="javascript:;">
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
                              <strong>상품선택</strong>
                              {$form.noneoption}
                            </li>
                            <li module="product_quantity">
                              <div>
                                {$form.quantity}
                                <a href="javascript:;">
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
                          <span>{$add_option_name}</span>
                          {$form.add_option}
                          <span title="현재글자수/최대글자수">
                            (
                            <span>0</span>
                            /{$option_maxlength})
                          </span>
                        </li>

                        <li
                          class="{$add_option_push_button_display|display} selectButton"
                          id="{$add_option_push_button_id}"
                        >
                          <a href="#none" onclick="{$add_action_push_button}">옵션선택</a>
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
                        <p title="상품명">{$product_name}</p>
                        <p class="salePrice {$product_sale_price_display|display}" title="할인판매가">
                          {$product_sale_price}
                        </p>
                        <p class="price {$product_price_display|display}" title="판매가">
                          <span class="{$product_price_del}">{$product_price}{$product_tax_type_text}</span>
                        </p>
                      </div>
                      <ul class="option">
                        <li module="product_option">
                          <ul>
                            <li>
                              <strong>{$option_name}</strong>
                              {$form.option}
                              <p class="value">{$option_desc}</p>
                            </li>
                            <li module="product_quantity">
                              <div>
                                {$form.quantity}
                                <a href="javascript:;">
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
                              <strong>상품선택</strong>
                              {$form.noneoption}
                            </li>
                            <li module="product_quantity">
                              <div>
                                {$form.quantity}
                                <a href="javascript:;">
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
                          <span>{$add_option_name}</span>
                          {$form.add_option}
                          <span title="현재글자수/최대글자수">
                            (
                            <span>0</span>
                            /{$option_maxlength})
                          </span>
                        </li>

                        <li
                          class="{$add_option_push_button_display|display} selectButton"
                          id="{$add_option_push_button_id}"
                        >
                          <a href="#none" onclick="{$add_action_push_button}">옵션선택</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- 오늘 배송 출발 -->
              <div data-hour="{$custom_option2}" data-run="{$custom_option1}">
                <div>
                  <img src="/__dep__/img/icon/today_ship.svg" />
                </div>
                <div>
                  <div class="shipping-today__title displaynone jsNextShipping">
                    오늘출발
                    <span class="cutline-time"></span>
                    마감
                  </div>
                  <div class="shipping-today__title displaynone jsTodayShipping">
                    <strong>오늘출발 상품</strong>
                    (
                    <span class="cutline-time"></span>
                    전 주문 시)
                  </div>
                  <div class="shipping-today__time shipping-today__time--run displaynone jsTodayShipping">
                    <span class="shipping-countdown shipping-today__ac"></span>
                    <span class="shipping-today__ac">내에 결제 시</span>
                    오늘 바로 발송됩니다.
                  </div>
                  <div class="shipping-today__time shipping-today__time--next displaynone jsNextShipping">
                    지금 주문 시
                    <span class="shipping-today__ac next-day"></span>
                    에 발송됩니다.
                  </div>
                </div>
              </div>

              <div id="{$total.total_id}" class="{$total.total_display|display}">
                <table border="1">
                  <caption>상품 목록</caption>
                  <colgroup>
                    <col style="width: auto" />
                    <col style="width: 100px" />
                    <col style="width: 35px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">상품명</th>
                      <th scope="col">상품수</th>
                      <th scope="col">가격</th>
                    </tr>
                  </thead>
                  <tbody class="{$quantity_display|display}">
                    <tr>
                      <td>{$name}</td>
                      <td>
                        <span class="quantity">
                          {$quantity}
                          <a href="javascript:;" class="up {$quantity_up_class}">수량증가</a>
                          <a href="javascript:;" class="down {$quantity_down_class}">수량감소</a>
                        </span>
                      </td>
                      <td class="right">
                        <span class="{$total.quantity_price}">{$product_price}</span>
                        <span class="mileage {$mileage_display|display}">
                          (
                          <img src="{$mileage_mileage_icon}" alt="" />
                          <span class="{$total.mileage_price}">{$mileage_value}</span>
                          )
                        </span>
                      </td>
                    </tr>
                    <tr id="{$total.option_id}" class="option" module="product_option">
                      <!--
                        $use_per_add_option = yes
                        $default_option = yes
                      -->
                      <td class="middle" colspan="3">
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
                                <span title="현재글자수/최대글자수">
                                  (
                                  <strong>0</strong>
                                  /{$option_maxlength})
                                </span>
                              </td>
                            </tr>
                            <tr module="product_fileoption">
                              <th scope="row">{$file_option_name}</th>
                              <td class="fileInfo">
                                {$form.file_option}
                                <ul>
                                  <li>- 파일은 최대 5개까지 {$file_option_limit}M 이하로 개별업로드 가능합니다.</li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                  <!-- 옵션선택 또는 세트상품 선택시 상품이 추가되는 영역입니다. 쇼핑몰 화면에는 아래와 같은 마크업구조로 표시됩니다. 삭제시 기능이 정상동작 하지 않습니다. -->
                  <tbody>
                    <!-- tr>
                                    <td>
                                        <p class="product">
                                            $상품명<br />
                                            <span>$옵션</span>
                                        </p>
                                    </td>
                                    <td>
                                        <span class="quantity">
                                            <input type="text" class="quantity_opt" />
                                            <a href="javascript:;" class="up eProductQuantityUpClass"><img src="//img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_up.gif" alt="수량증가" /></a>
                                            <a href="javascript:;" class="down eProductQuantityDownClass"><img src="//img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_down.gif" alt="수량감소" /></a>
                                        </span>
                                        <a href="#none"><img src="//img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif" alt="삭제" class="option_box_del" /></a>
                                    </td>
                                    <td class="right">
                                        <span>$가격</span>
                                        <span class="mileage">(<img src="//img.echosting.cafe24.com/design/skin/admin/ko_KR/product/ico_pay_point.gif" /> <span class="mileage_price">$적립금</span>)</span>
                                    </td>
                                </tr -->
                  </tbody>

                  <!-- // 옵션선택 또는 세트상품 선택시 상품이 추가되는 영역입니다. 쇼핑몰 화면에는 아래와 같은 마크업구조로 표시됩니다. 삭제시 기능이 정상동작 하지 않습니다. -->
                </table>
              </div>

              <div id="freeShipGuide" class="displaynone" data-delivery="{$delivery_price|striptag}">
                <div class="text1">
                  <strong class="insufficientPrice"></strong>
                  원만 더 구매하면
                  <strong class="shippingCost">무료배송!</strong>
                </div>
                <div class="text2">
                  <strong>😄 무료배송</strong>
                  <span>
                    <strong class="shippingCost">3,000</strong>
                    원을 절약했어요.
                  </span>
                </div>
                <div class="levelMeter">
                  <div class="levelLine"><span id="levelLineActive"></span></div>
                  <span class="minValue">0원</span>
                  <span class="maxValue">60,000원</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="infoArea-footer">
          <div id="{$total.total_price_id}" class="totalPrice">
            <strong class="title">
              총 구매 금액
              <span class="qty displaynone">(QUANTITY)</span>
            </strong>
            <span class="{$total.total_cnt}">
              <strong><em>0</em></strong>
              (0개)
            </span>
          </div>
          <p class="ec-base-help {$price_warning_class}">
            할인가가 적용된 최종 결제예정금액은 주문 시 확인할 수 있습니다.
          </p>

          <div module="product_action" id="{$fixed_action_button}" class="productAction">
            <div class="buy-btn-wrap flex {$action_display|display}">
              <button
                type="button"
                class="btnNormal sizeL actionCart {$basket_display|display}"
                onclick="{$action_basket}"
                id="actionCart"
              >
                장바구니
              </button>
              <a href="#none" class="btnSubmit gFull sizeL {$buy_display|display}" onclick="{$action_buy}">
                <span id="{$btn_buy_mobile_id}">구매하기</span>
                <span class="{$btn_reserve_class|display}" id="{$btn_reserve_mobile_id}">예약주문</span>
                <span id="{$btn_regular_delivery_id}" class="{$btn_regular_delivery|display}">정기배송 신청하기</span>
              </a>
            </div>
            <div class="flex soldout {$action_soldout_display|display}">
              <button type="button" class="btnSubmit gFull sizeL {$soldout_display|display}">SOLD OUT</button>
            </div>
          </div>

          <div class="flex app-pay-wrap">
            <!-- 네이버 체크아웃 구매 버튼  -->
            <div id="NaverChk_Button" style="display: none"></div>
            <!-- 카카오페이 구매 버튼 -->
            <div id="{$app_payment_button_box_id}"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-fix-footer" module="product_action">
      <span class="relative flex btnNormal sizeL jsGoReview flex--v-center flex--h-center">
        <span>
          <span class="fix-toggle-txt"><img src="/__dep__/img/icon/icon_review.png" /></span>
          <span module="product_additional" class="review-count jsReviewCount">{$review_count}</span>
        </span>
      </span>
      <div class="btnNormal sizeL {$basket_display|display}" onclick="{$action_basket}">장바구니</div>
      <span class="btnSubmit gFull sizeL jsLayerBtn">
        <span id="{$btn_buy_mobile_id}">구매하기</span>
        <span class="{$btn_reserve_class|display}" id="{$btn_reserve_mobile_id}">예약주문</span>
        <span id="{$btn_regular_delivery_id}" class="{$btn_regular_delivery|display}">정기배송 신청하기</span>
      </span>
    </div>

    <dl module="product_quantity" class="ec-base-desc quantity">
      <dt>수량</dt>
      <dd>
        <div>
          {$form.quantity}
          <a href="javascript:;">
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

    <div class="guideArea">
      <p class="info displaynone {$limit_display|display}">
        (최소주문수량 {$minimum_limit}개 이상
        <span class="{$maximum_limit_display|display}">/ 최대주문수량 {$maximum_limit}개 이하</span>
        )
      </p>
      <span class="sizeGuide {$size_guide_display|display}">
        <a href="#none" class="{$size_guide_class}" product_no="{$product_no}">
          사이즈 가이드
          <i aria-hidden="true" class="icon icoArrowRight"></i>
        </a>
      </span>
    </div>

    <div class="productSet" module="product_setproduct">
      <!--
        $use_per_add_option = yes
      -->
      <div class="title">
        <h3>세트상품</h3>
      </div>
      <ul class="product">
        <li>
          <div class="information">
            <div class="thumbnail">
              <a href="/product/detail.html?product_no={$product_no}">
                <img src="{$product_image}" alt="" id="{$image_id}" />
              </a>
            </div>
            <p title="상품명">
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
            <button
              type="button"
              class="btnNormal sizeS btnInfo eProductDetailInfo"
              id="eProductDetailInfo_{$product_no}"
            >
              추가정보
            </button>
          </div>
          <ul class="option">
            <li module="product_option">
              <ul>
                <li>
                  <strong>{$option_name}</strong>
                  {$form.option}
                  <p class="value">{$option_desc}</p>
                </li>
                <li module="product_quantity">
                  <div>
                    {$form.quantity}
                    <a href="javascript:;">
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
                  <span>상품선택</span>
                  {$form.noneoption}
                </li>
                <li module="product_quantity">
                  <div>
                    {$form.quantity}
                    <a href="javascript:;">
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
              <span>{$add_option_name}</span>
              {$form.add_option}
              <span title="현재글자수/최대글자수">
                (
                <strong>0</strong>
                /{$option_maxlength})
              </span>
            </li>
            <li class="{$add_option_push_button_display|display} selectButton" id="{$add_option_push_button_id}">
              <a href="#none" onclick="{$add_action_push_button}">옵션선택</a>
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
            <p title="상품명">
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
            <button
              type="button"
              class="btnNormal sizeS btnInfo eProductDetailInfo"
              id="eProductDetailInfo_{$product_no}"
            >
              추가정보
            </button>
          </div>
          <ul class="option">
            <li module="product_option">
              <ul>
                <li>
                  <span>{$option_name}</span>
                  {$form.option}
                  <p class="value">{$option_desc}</p>
                </li>
                <li module="product_quantity">
                  <div>
                    {$form.quantity}
                    <a href="javascript:;">
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
                  <span>상품선택</span>
                  {$form.noneoption}
                </li>
                <li module="product_quantity">
                  <div>
                    {$form.quantity}
                    <a href="javascript:;">
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
              <span>{$add_option_name}</span>
              {$form.add_option}
              <span title="현재글자수/최대글자수">
                (
                <span>0</span>
                /{$option_maxlength})
              </span>
            </li>

            <li class="{$add_option_push_button_display|display} selectButton" id="{$add_option_push_button_id}">
              <a href="#none" onclick="{$add_action_push_button}">옵션선택</a>
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
          <div>
            {$form.quantity}
            <a href="javascript:;">
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
  </div>
</div>
```
