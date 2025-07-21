# http headers 보안 CORS vs CORP

## SOP (Same-Origin Policy) 동일 출처 정책

> 다른 Origin에서 JavaScript fetch() 같은 요청을 제한
>
> > SOP가 적용되어 있어도 리소스 요청은 가능하다. (img, script, css, iframe 등)

## CORP (Cross-Origin Resource Policy) 교차 출처 리소스 정책

> 브라우저가 "정적 리소스"를 불러오는 단계에서 차단 (강력한 보안)
