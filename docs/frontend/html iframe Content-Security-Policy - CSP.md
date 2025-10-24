# html iframe Content-Security-Policy - CSP

> iframe 사용 시 브라우저에게 보안 정책을 설정하는 방법
>
> > 교차 사이트 스크립팅(XSS)과 데이터 주입 공격을 비롯한 특정 유형의 공격을 탐지하고 완화하는 데 도움이 되는 추가 보안 계층
> >
> > > frame-ancestors로 X-Frame-Options와 같은 기능을 수행

```html
<!-- default-src: 기본 정책 (모든 *-src에 똑같이 적용) -->
<!-- script-src: 스크립트 정책 -->
<!-- style-src: 스타일 정책 -->
<!-- img-src: 이미지 정책 -->
<!-- connect-src: 데이터 전송 정책 (AJAX) -->
<!-- font-src: 폰트 정책 -->
<!-- media-src: 미디어 정책 -->
<!-- worker-src: 워커 정책 -->
<!-- manifest-src: manifest 정책 -->
<!-- plugin-types: 플러그인 정책 -->
<!-- ... -->

<!-- child-src: iframe 정책 (frame-src의 최신 버전) -->
<!-- frame-ancestors: 부모 페이지 정책 -->
<!-- 'self': 현재 도메인 -->
<!-- 'none': 모든 iframe에 금지 -->

<!-- 삽입되는 페이지의 head에 설정 -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';" />
```
