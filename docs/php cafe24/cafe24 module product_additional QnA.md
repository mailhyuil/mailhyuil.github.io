# cafe24 module product_additional QnA

```html
<div module="product_additional">
  <!-- Q&A -->
  <div id="prdQnA">
    <div class="board">
      <h3>상품 Q&amp;A</h3>
      <p class="btnArea type2">
        <a href="{$qna_write}" class="btnSubmit">상품문의하기</a>
        <a href="{$qna_list}" class="btnEm">모두보기</a>
      </p>
      <a name="use_review"></a>
      <div module="product_qna">
        <!--
          $count = 5
        -->
        <p class="noAccess {$deny_display|display}">글읽기 권한이 없습니다.</p>
        <div class="minor {$adult_display|display}">
          <p>
            <span>19세 미만의 미성년자</span>
            는 출입을 금합니다.
          </p>
          <a class="btnBasic" href="/intro/board.html{$returnParam}">성인인증하기</a>
        </div>
        <ul class="board {$list_display|display}">
          <li>
            <p class="descriptions">
              <a href="/board/product/read.html{$param_read}">
                <strong class="summary">
                  {$icon_re} {$icon_lock} {$icon_mobile} {$subject}
                  <span class="commentCnt">{$comment_count}</span>
                  {$icon_hit} {$icon_file} {$icon_new}
                </strong>
                <span class="id" title="작성자">{$writer}</span>
                <span class="date {$date_display|display}" title="작성일">{$write_date|date:Y-m-d H:i:s}</span>
                <span class="{$hit_display|display}">조회 {$hit_count}</span>
                <span class="{$vote_display|display}">추천 {$vote}</span>
                <span class="point {$point_display|display}">
                  <img
                    src="http://img.echosting.cafe24.com/skin/mobile_ko_KR/board/ico_star{$point_count}.png"
                    alt="{$point_count}점"
                    width="50"
                    height="8"
                  />
                </span>
              </a>
            </p>
          </li>
          <li>
            <p class="descriptions">
              <a href="/board/product/read.html{$param_read}">
                <strong class="summary">
                  {$icon_re} {$icon_lock} {$icon_mobile} {$subject}
                  <span class="commentCnt">{$comment_count}</span>
                  {$icon_hit} {$icon_file} {$icon_new}
                </strong>
                <span class="id" title="작성자">{$writer}</span>
                <span class="date {$date_display|display}" title="작성일">{$write_date|date:Y-m-d H:i:s}</span>
                <span class="{$hit_display|display}">조회 {$hit_count}</span>
                <span class="{$vote_display|display}">추천 {$vote}</span>
                <span class="point {$point_display|display}">
                  <img
                    src="http://img.echosting.cafe24.com/skin/mobile_ko_KR/board/ico_star{$point_count}.png"
                    alt="{$point_count}점"
                    width="50"
                    height="8"
                  />
                </span>
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div module="product_qnapaging" class="paginate typeList">
        <p class="prev">
          <a href="{$param_before}"><span>이전 페이지</span></a>
        </p>
        <ol>
          <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
          <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
          <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
          <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
          <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
        </ol>
        <p class="next">
          <a href="{$param_next}"><span>다음 페이지</span></a>
        </p>
      </div>
    </div>
  </div>
</div>
```
