# L7 http headers 보안 CORP - Cross-Origin Resource Policy

> 다른 출처의 사이트에서 "정적 리소스"를 불러오는 것을 제어
>
> (SOP가 적용되어 있어도 정적 리소스는 접근이 가능하기 때문에)
>
> > 민감한 리소스가 외부에서 무단으로 사용되지 않도록 보호

```txt
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin

# same-site: 같은 도메인의 리소스만 로드 가능
# same-origin: 프로토콜 + 도메인 + 포트가 같은 출처의 리소스만 로드 가능
# cross-origin: 다른 출처의 리소스도 로드 가능
```
