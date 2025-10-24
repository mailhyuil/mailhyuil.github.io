# L7 http headers 보안 CSP Trusted Types

> XSS 공격을 방지하기 위해서 브라우저에서 trustedType을 생성 후 그 trusted type이 아닌 경우에 csp를 활용해 차단할 수 있다.

## create trusted type

```js
// default라는 policy내에 trust type을 생성하는 함수를 정의
window.trustedTypes.createPolicy("default", {
  createHTML: input => {
    // 1) XSS 필터링 로직을 수행하거나
    // 2) 신뢰할 만한 문자열만 허용
    return input; // <- 실제로는 안전성 검증이 필요
  },
});

element.innerHTML = trustedTypes.default.createHTML(userInput);
```

## CSP

> trusted-types를 사용하도록 설정
>
> > require-trusted-types-for 'script'를 설정하면 script에 대해서만 trusted type을 사용하도록 강제할 수 있다.

```txt
Content-Security-Policy: trusted-types 'default' myPolicyName; require-trusted-types-for 'script';
```
