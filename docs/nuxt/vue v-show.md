# vue v-show

display style의 토글
보였다 안보이는 경우가 많을 때 사용

## v-if vs v-show

- v-if는 조건이 false일 때 DOM에서 요소를 제거하지만
- v-show는 display: none을 사용하여 요소를 숨깁니다. 따라서 v-show는 요소가 자주 토글되는 경우에 더 효율적입니다.
- 반면에 v-if는 요소가 자주 토글되지 않는 경우에 더 적합합니다.
