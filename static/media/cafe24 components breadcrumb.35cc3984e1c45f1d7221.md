# cafe24 components breadcrumb

## html

```html
<!--breadcrumb-->
<div module="Product_menupackage">
  <div module="product_headcategory">
    <div class="dep-gap-1 dep-justify-end dep-flex dep-py-5">
      <li><a href="/">HOME</a></li>
      <span>/</span>
      <li class="{$disp_cate_1|display}"><a href="{$link_product_list_1}">{$name_1}</a></li>
      <span class="{$disp_cate_2|display}">/</span>
      <li class="{$disp_cate_2|display}"><a href="{$link_product_list_2}">{$name_2}</a></li>
      <span class="{$disp_cate_3|display}">/</span>
      <li class="{$disp_cate_3|display}"><a href="{$link_product_list_3}">{$name_3}</a></li>
      <span class="{$disp_cate_4|display}">/</span>
      <li class="{$disp_cate_4|display}">
        <a href="{$link_product_list_4}">{$name_4}</a>
      </li>
    </div>
  </div>
</div>
```

## js

```js

```
