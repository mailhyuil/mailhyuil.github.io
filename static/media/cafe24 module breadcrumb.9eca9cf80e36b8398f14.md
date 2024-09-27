# cafe24 module breadcrumb

```html
<div module="Product_menupackage">
  <!--@js(/js/module/product/menucategory.js)-->
  <div class="path" module="product_headcategory">
    <span>현재 위치</span>
    <ol>
      <li><a href="/">홈</a></li>
      <li class="{$disp_cate_1|display}"><a href="{$link_product_list_1}">{$name_1}</a></li>
      <li class="{$disp_cate_2|display}"><a href="{$link_product_list_2}">{$name_2}</a></li>
      <li class="{$disp_cate_3|display}"><a href="{$link_product_list_3}">{$name_3}</a></li>
      <li class="{$disp_cate_4|display}">
        <strong><a href="{$link_product_list_4}">{$name_4}</a></strong>
      </li>
    </ol>
  </div>
  <!--@import(/product/shoppQ/searchContent.html)-->
</div>
```
