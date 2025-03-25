# font unicode-range

> 특정 글자가 있을 때만 폰트를 로드하도록 설정할 수 있다.

```css
@font-face {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  src: url("/fonts/NotoSansKR-Regular.woff2") format("woff2");
  unicode-range: U+ac00-d7a3;
}
```
