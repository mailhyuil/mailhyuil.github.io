# font FOUT FOIT

> Flash of Unstyled Text
>
> > Flash of Invisible Text
> >
> > > 폰트가 나중에 적용되는 현상

## font를 preload

## font loading api

> new FontFace() 사용

```js
const font = new FontFace("Banana Font", "url(/fonts/banana.woff2)", {
  style: "normal",
  unicodeRange: "U+000-5FF",
  weight: "300",
});

// 1. DOM 트리 구성을 기다리지 않고, 초기에 즉시 실행
font.load().then(function () {
  // 2. 폰트 다운로드가 끝나면 폰트를 적용
  document.fonts.add(font);
  document.body.style.fontFamily = "Banana Font, serif";

  // 3.(콘텐츠를 숨긴 상태) 폰트 랜더링이 끝나면 폰트 사용이 가능하면 콘텐츠를 나타냄
  const content = document.getElementById("content");
  content.style.visibility = "visible";
});
```

## web font loader를 사용

```html
<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
<script>
  WebFont.load({
    google: {
      families: ["Droid Sans", "Droid Serif"],
    },
  });
</script>
```

## Next-Gene Font

> WOFF2, WOFF를 사용하자

## 서브셋 폰트를 사용

> 서브셋 폰트란 불필요한 글자를 제거한 폰트 파일
>
> > (e.g. 곌, 곖, 꺖)

## unicode-range 속성 사용

> i18n을 사용한다면 @font-face에 unicode-range 속성을 사용하여 필요한 글자만 다운로드 받도록 설정할 수 있다.

```css
@font-face {
  font-family: 'korea font';
  font-weight: 400;
  src: local('korea font'),
    url(woff2-foo-font-ko-path) format('woff2'),
    url(woff-foo-font-ko-path) format('woff'),
  unicode-range: U+1100-U+11FF; /* 한글만 다운로드 */
}

@font-face {
  font-family: 'latin font';
  font-weight: 400;
  src: local('latin font'),
    url(woff2-foo-font-path) format('woff2'),
    url(woff-foo-font-path) format('woff'),
  unicode-range: U+000-5FF;    /* 라틴어만 다운로드 */
}
```
