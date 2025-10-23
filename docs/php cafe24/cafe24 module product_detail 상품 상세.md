```html
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
```
