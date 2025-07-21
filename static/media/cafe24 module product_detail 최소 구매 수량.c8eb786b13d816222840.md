```html
<div>
  <p class="{$limit_display|display}">
    (최소주문수량 {$minimum_limit}개 이상
    <span class="{$maximum_limit_display|display}">/ 최대주문수량 {$maximum_limit}개 이하</span>
    )
  </p>
  <span class="{$size_guide_display|display}">
    <a href="#none" class="{$size_guide_class}" product_no="{$product_no}">사이즈 가이드</a>
  </span>
</div>
```
