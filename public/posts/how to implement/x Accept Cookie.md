# Accept Cookie

> 쿠키는 마케팅 용도로도 사용된다
>
> > 이때 마케팅 용도로 쿠키를 사용하기 위해서는 사용자의 동의를 받아야 한다.
> >
> > > 마케팅 쿠키: 광고 쿠키, 추적 쿠키라 불리기도 하는 마케팅 쿠키는 유저의 웹사이트 방문 내역을 추적하며, 쿠키 제공자가 접속자의 경향 및 웹사이트 이용 패턴을 파악하도록 함으로써 유저에게 관련성 높은 광고나 제품이 제공되는데에 기여하는 쿠키입니다.

## GDPR

> 개인정보를 수집하려면 사용자 동의가 필요하다고 규정하고 있는 EU의 개인정보보호 법령

## html

```html
<div class="p-4 cookie-overlay d-none">
  <div class="d-flex">
    <div class="mr-3"> By clicking the "Accept" button below, you agree to our <%= link_to 'Cookie Policy', cookies_url, target: '_blank' %>. </div>
    <img src="/close.png" class="close-cookies" />
  </div>
  <button class="mt-3 btn btn-primary accept-cookies">Accept</button>
</div>
```

## js

> document.cookie의 accepted_cookies를 yes로 설정한다.

```js
$(document).on("ready", function () {
  if (document.cookie.indexOf("accepted_cookies=") < 0) {
    $(".cookie-overlay").removeClass("d-none").addClass("d-block");
  }

  $(".accept-cookies").on("click", function () {
    document.cookie = "accepted_cookies=yes;";
    $(".cookie-overlay").removeClass("d-block").addClass("d-none");
  });

  // expand depending on your needs
  $(".close-cookies").on("click", function () {
    $(".cookie-overlay").removeClass("d-block").addClass("d-none");
  });
});
```
