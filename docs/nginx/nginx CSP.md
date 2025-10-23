# nginx CSP

> angular의 index.html에 meta 태그로 넣어도 되지만 server에서 설정하는 것을 권장한다.

## helmen.js의 csp를 적용

```conf
add_header Content-Security-Policy:
  "default-src 'self';
  script-src 'self';
  style-src 'self' https: https://cdn.example.com 'unsafe-inline';
  img-src 'self' data:;
  font-src 'self' data: https:;
  connect-src 'self';
  form-action 'self';
  frame-ancestors 'self';
  object-src 'none';
  upgrade-insecure-requests;
  block-all-mixed-content;" always;

# (Angular Material 등에서 인라인 스타일이 필요없다면 'unsafe-inline' 제거)
# (필요하다면 특정 CDN 도메인 추가, 예: https://www.googletagmanager.com)
```

## add_header로 CSP 설정

```conf
server {
    server_name example.com;

    listen 443 ssl;
    # ... SSL 설정 ...

    # server block 전체에 CSP 설정
    add_header Content-Security-Policy "default-src 'self'; ..." always;

    location / {
        # location block에 CSP 설정
        add_header Content-Security-Policy "default-src 'self'; ..." always;
        root /app/client/browser;
        index index.html;
        try_files $uri $uri/ /index.html =404;
    }
}
```
