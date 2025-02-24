# html iframe X-Frame-Options

> iframe의 Clickjacking 공격을 방지하기 위한 HTTP 헤더
>
> > CSP(Content-Security-Policy)의 frame-ancestors 정책과 같은 기능
> >
> > > CSP를 사용하는 것이 권장됨

```sh
X-Frame-Options: DENY  # 모든 iframe 사용 금지
X-Frame-Options: SAMEORIGIN  # 같은 origin에서만 iframe 허용
X-Frame-Options: ALLOW-FROM https://example.com  # 특정 사이트만 허용 (일부 브라우저에서만 지원)

Content-Security-Policy: frame-ancestors 'none';  # 모든 iframe 사용 금지
Content-Security-Policy: frame-ancestors 'self';  # 현재 도메인에서만 iframe 허용
Content-Security-Policy: frame-ancestors https://example.com;  # 특정 사이트만 허용
```
