# L7 http headers 보안 CSP html meta tag

> 다른 보안 헤더와 달리 csp는 head의 meta 태그에 설정할 수 있다.
>
> > server의 설정 권한이 없거나, 특정 페이지에만 적용하고 싶을 때 사용
> >
> > > server의 header 설정이 우선순위가 높기 때문에 server 설정이 우선 적용된다.

```html
<!-- 삽입되는 페이지의 head에 설정 -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';" />
```
