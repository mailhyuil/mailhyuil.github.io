# L7 http headers 보안 CSP - Content-Security-Policy

> 웹 전체 리소스 로딩/실행 정책을 제어하는 보안 헤더
>
> > 교차 사이트 스크립팅(XSS)과 데이터 주입 공격을 비롯한 특정 유형의 공격을 탐지하고 완화하는 데 도움이 되는 추가 보안 계층
> >
> > > frame-ancestors 'none'으로 X-Frame-Options: DENY와 같은 기능을 수행 (iframe)

```html
<!-- 지시어 -->
<!-- default-src       - 기본 정책 (모든 *-src에 똑같이 적용) -->
<!-- script-src        - 스크립트 정책 -->
<!-- style-src         - 스타일 정책 -->
<!-- img-src           - 이미지 정책 -->
<!-- connect-src       - XHR, WebSockets, EventSource 정책 -->
<!-- font-src          - 폰트 정책 -->
<!-- media-src         - 미디어 정책 -->
<!-- worker-src        - 워커 정책 -->
<!-- manifest-src      - manifest 정책 -->
<!-- child-src         - iframe 정책 (frame-src의 최신 버전) -->
<!-- trusted-types     - Trusted Types 정책 -->
<!-- plugin-types      - 플러그인 정책 -->
<!-- frame-ancestors   - 부모 페이지 정책 -->
<!-- ... -->

<!-- 값 -->
<!-- 'none'            -   모두 금지 -->
<!-- 'self'            -   현재 도메인 허용 -->
<!-- 'unsafe-inline'   -   인라인 스타일 허용 -->
<!-- 'unsafe-eval'     -   eval() 허용 -->
<!-- data:             -   프로토콜이 data인 리소스 허용 -->
<!-- https:            -   프로토콜이 https인 리소스 허용 -->
<!-- https://cdn.example.com  -  허용할 origin 명시-->
<!-- 'nonce-<base64>'  -   nonce 값이 일치하는 리소스 허용 -->
<!-- 'strict-dynamic'  -   동적으로 생성된 스크립트 허용 -->
<!-- 'report-uri <uri>'-   보안 정책 위반 보고 -->

<!-- 삽입되는 페이지의 head에 설정 -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';" />
```
