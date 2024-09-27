# cafe24 module product_image

> product_detail 모듈내에서 사용

```html
<div class="overview" module="product_image">
  <!-- 공급사 바로가기버튼 영역 -->
  <div class="topLogo {$supply_link_display|display}">
    <span>{$supply_top_logo}</span>
    <a href="#none" onclick="{$supply_go_action}"><img src="{$supply_go_img}" alt="공급사 바로가기" /></a>
  </div>
  <!-- 공급사 바로가기버튼 영역 -->
  <div class="prdImgView">
    <p class="prdImg">
      <a href="#none" id="prdDetailImg" data-param="{$zoom_param}"><img src="{$big_img}" class="bigImage" alt="" /></a>
    </p>
    <div module="Product_mobileImage">
      <!--
         $swipe = yes
       -->
      <ul>
        <li data-param="{$zoom_param}"><img src="{$big_img}" class="{$thumb_img_class}" alt="" /></li>
        {$aAddImage}
      </ul>
    </div>
  </div>
  <div class="{$colorchip_display|display}">
    <div class="color" module="product_Colorchip">
      <span class="chips" style="background-color:{$color};"></span>
      <span class="chips" style="background-color:{$color};"></span>
    </div>
  </div>
</div>
```
