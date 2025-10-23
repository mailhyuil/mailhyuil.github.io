# typescript declare

> 변수, 상수, 함수, 또는 클래스가 어딘가에 이미 선언되어 있음을 컴파일러에게 알린다. (e.g. kakao..)
>
> > cdn으로 Kakao 객체를 불러와 프로그램 상에 Kakao라는 객체가 존재하지만 이를 compiler는 알지 못한다.
> >
> > 이때 declare를 사용해 Kakao 객체가 이미 선언되어 있다는 것을 알려준다.

## window.kakao 사용하기

```ts
// 1. Kakao 객체를 불러오기
<script
  src="https://t1.kakaocdn.net/kakao_js_sdk/${VERSION}/kakao.min.js"
  integrity="${INTEGRITY_VALUE}"
  crossorigin="anonymous"
></script>;

// 2. Kakao 객체를 선언하여 컴파일러에게 알려주기
declare const Kakao: any;
// any 타입이 아닌 Kakao 메소드도 알려주고싶다면 namespace를 사용한다.
declare namespace Kakao {
  function someMethod(): void;
}
```
