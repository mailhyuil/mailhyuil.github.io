# api 사용법

1. API 객체를 Load
   > script를 삽입하는 방식
   >
   > > API SDK로 불러오기
   > >
   > > > 두 방식 모두 api_key를 삽입해주기
2. API 객체를 이용해서 원하는 동작을 서비스(함수..)로 만들기
3. API 객체 조작

```ts
this.paymentWidget = await loadTossPayments(
  process.env['NX_TOSS_PAYMENTS_CLIENT_KEY']
);

this.paymentWidget.조작()

///// or /////

<script src='https://api_cdn?api_key=blahblah'></script>
paymentWidget.조작()
```

## script 삽입 방식

> script로 api 불러오기 -> api 내에 있는 객체(daum)으로 api 조작

```js
const script = document.createElement("script");
script.type = "text/javascript";
script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

/**
 * 스크립트 삽입
 */
const before = document.getElementsByTagName("script")[0];
before.parentNode.insertBefore(script, before);

export function postcode(renderer, elem, callback) {
  new daum.Postcode({
    oncomplete: (data) => {
      callback(data);
      elem.style.display = "none";
    },
    width: "100%",
    height: "100%",
    maxSuggestItems: 5,
  }).embed(elem);

  /**
   * 창크기 조정, 팝업창 센터로
   */
  renderer.setStyle(elem, "display", "block");
}
```
