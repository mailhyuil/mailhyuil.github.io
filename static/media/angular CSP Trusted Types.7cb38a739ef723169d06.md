# angular CSP Trusted Types

> angular는 기본으로 angular라는 policy 이름으로 trusted types가 정의 되어 있다.
>
> > CSP에서 이 trusted-types만 사용하도록 설정한다.

## CSP

```txt
Content-Security-Policy: trusted-types angular; require-trusted-types-for 'script';
```
