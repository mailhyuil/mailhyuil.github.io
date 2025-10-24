# tailwindcss font 나눔 스퀘어

> font-family 이름을 하나로 통일
>
> > font-weight 넣어주기

## styles.scss

```css
@font-face {
  font-family: "NanumSquareRound";
  font-weight: 400;
  src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundL.eot);
  src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundL.eot?#iefix) format("embedded-opentype"),
    url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundL.woff2) format("woff2"),
    url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundL.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundL.ttf)
      format("truetype");
}

@font-face {
  font-family: "NanumSquareRound";
  font-weight: 500;
  src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundR.eot);
  src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundR.eot?#iefix) format("embedded-opentype"),
    url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundR.woff2) format("woff2"),
    url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundR.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundR.ttf)
      format("truetype");
}

@font-face {
  font-family: "NanumSquareRound";
  font-weight: 600;
  src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundB.eot);
  src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundB.eot?#iefix) format("embedded-opentype"),
    url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundB.woff2) format("woff2"),
    url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundB.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundB.ttf)
      format("truetype");
}

@font-face {
  font-family: "NanumSquareRound";
  font-weight: 700;
  src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundEB.eot);
  src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundEB.eot?#iefix) format("embedded-opentype"),
    url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundEB.woff2) format("woff2"),
    url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundEB.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundEB.ttf)
      format("truetype");
}
```

## tailwind.config.js

```js
fontFamily: {
  sans: ['NanumSquareRound'],
},
```
