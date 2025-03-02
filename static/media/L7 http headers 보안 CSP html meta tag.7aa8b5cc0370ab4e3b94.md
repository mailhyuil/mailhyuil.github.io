# http headers 보안 Content-Security-Policy (CSP)

> 다른 보안 헤더와 달리 csp는 head의 meta 태그에 설정할 수 있다.

```html
<!-- 삽입되는 페이지의 head에 설정 -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';" />
```
