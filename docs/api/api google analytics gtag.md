# api google analytics gtag

> 이벤트를 관리하기 위한 라이브러리로 google tag manager, analytics.js, gtag.js가 있다.
>
> > 현재는 gtag.js 많이 사용

## install

> google analytics 생성 후 알려줌

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-XXXXXXXXXX");
</script>
```

## gtag

> Google 태그를 직접 추가하는 단일 태그
>
> > 이벤트란 사용자와 웹사이트 내 측정 가능한 모든 상호작용

```js
gtag("event", "event_name", {
  key: "value",
});

// e.g. download_file button을 클릭하는 이벤트 수집
gtag("event", "click_button", {
  button_name: "download_file",
});
```
