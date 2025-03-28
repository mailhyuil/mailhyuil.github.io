# nodejs helmet

> 보안에 필요한 헤더들을 자동으로 전부 추가해준다.

## CSP (content-security-policy)

> CSP를 사용하면 웹사이트의 http응답에 CSP 헤더가 추가된다.
>
> > CSP 헤더가 존재할 경우, 브라우저는 CSP 헤더에 언급되지 않은 리소스들을 다음과 같이 로드하지 않게된다.
> >
> > > Helmet의 CSP 기본설정은 ‘self’ (i.e. 자신의 웹사이트에 존재하는 리소스들만을 허용하기 때문이다.)

```ts
/** Security */
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        /* 
            none : 어떳 것도 허용하지 않음
            self : 현재 출처에서는 허용하지만 하위 도메인에서는 허용되지 않음
            unsafe-inline : 인라인 자바스크립트, 인라인 스타일을 허용
            unsafe-eval	: eval과 같은 텍스트 자바스크립트 메커니즘을 허용 
        */
        // 구글 API 도메인과 인라인 스크립트, eval 스크립트를 허용
        "script-src": ["'self'", "*.googleapis.com", "'unsafe-inline'", "'unsafe-eval'"],

        // 다음과 카카오에서 이미지 소스를 허용
        "img-src": ["'self'", "data:", "*.daumcdn.net", "*.kakaocdn.net"],

        // 소스에 https와 http 허용
        "base-uri": ["/", "http:"],
      },
    },
  }),
);
```

### default CSP

```txt
default-src 'self';
base-uri 'self';
font-src 'self' https: data:;
form-action 'self';
frame-ancestors 'self';
img-src 'self' data:;
object-src 'none';
script-src 'self';
script-src-attr 'none';
style-src 'self' https: 'unsafe-inline';
upgrade-insecure-requests
```

## CORP (cross-origin-resource-policy)

> 서버의 정적 리소스(이미지, 폰트, JavaScript 등)를 다른 도메인의 브라우저에서 불러오는 것을 허용할지 여부를 결정

```ts
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  }),
);
```
