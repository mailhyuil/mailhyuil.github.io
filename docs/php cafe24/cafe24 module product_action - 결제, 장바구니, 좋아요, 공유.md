# cafe24 module product_action - 결제, 장바구니, 좋아요, 공유

```html
<div module="product_action">
  <button class="{$wishlist_display|display}" onclick="{$action_wishlist}">
    <!--좋아요 아이콘-->
  </button>
  <button id="share-button">
    <!--공유 아이콘-->
    <!--공유 기능은 직접 구현하세요-->
  </button>
</div>

<div module="product_action">
  <div class="{$action_display|display}">
    <button type="button" class="btnNormal sizeM actionCart {$basket_display|display}" onclick="{$action_basket}">
      장바구니
    </button>
    <a href="#none" class="{$buy_display|display}" onclick="{$action_buy}">
      <span id="{$btn_buy_mobile_id}">바로구매</span>
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
```
