```html
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
                  <span class="txtByte" title="현재글자수/최대글자수">
                    (
                    <strong class="length">0</strong>
                    /{$option_maxlength})
                  </span>
                </td>
              </tr>
              <tr module="product_fileoption">
                <th scope="row">{$file_option_name}</th>
                <td class="fileInfo">
                  {$form.file_option}
                  <ul class="infoDesc">
                    <li>- 파일은 최대 5개까지 {$file_option_limit}M 이하로 개별업로드 가능합니다.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
