# angular CSP

> nginx에서 설정하거나
>
> > index.html에 meta 태그로 설정
> >
> > > local, dev, prod 환경마다 JIT 사용 등등의 설정이 다르기 때문에 다른 CSP 설정이 필요하다.

## nginx에서 추가

```conf
add_header Content-Security-Policy "connect-src 'self'; default-src 'self'; object-src 'none'; script-src https: 'unsafe-eval' 'unsafe-inline'; style-src https: 'unsafe-inline'; worker-src 'none'; font-src data: https:; img-src data: https:;" always;
```

## index.html에서 추가

```html
<meta
  http-equiv="Content-Security-Policy"
  content="connect-src 'self'; default-src 'self'; object-src 'none'; script-src https: 'unsafe-eval' 'unsafe-inline'; style-src https: 'unsafe-inline'; worker-src 'none'; font-src data: https:; img-src data: https:;"
/>
```
