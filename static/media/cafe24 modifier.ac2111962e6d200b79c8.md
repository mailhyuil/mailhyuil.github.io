# cafe24 modifier

## cover

## cut

```txt
{$product_name|cut:10,...}
```

## date

## imgconv

## strconv

## nl2br

## numberformat

## replace

## striptag

## timetodate

```txt
{$foo|timetodate:Y-m-d}
```

## lower

## upper

## display

> 해당 값이 false를 리턴한다면, display:none으로 처리합니다. 어드민 기능상의 노출설정을 연동되게 할 때 사용합니다.

```html
<ul module="product_ListItem">
  <li class="{$item_display|display}">
    <strong class="title {$item_title_display|display}">{$item_title} :</strong>
    {$item_content}
  </li>
  <li class="{$item_display|display}">
    <strong class="title {$item_title_display|display}">{$item_title} :</strong>
    {$item_content}
  </li>
</ul>
```
