# http headers 보안 Cross-Origin-Resource-Policy (CORP)

## Cross-Origin-Resource-Policy (CORP)

> Blocks others from loading your resources cross-origin
>
> > 다른 출처의 사이트에서 내 리소스를 불러오는 것을 제어하여, 민감한 리소스가 외부에서 무단으로 사용되지 않도록 보호

```txt
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin

# same-site: 같은 도메인의 리소스만 로드 가능
# same-origin: 프로토콜 + 도메인 + 포트가 같은 출처의 리소스만 로드 가능
# cross-origin: 다른 출처의 리소스도 로드 가능
```

## Cross-Origin-Embedder-Policy (COEP)

> 웹사이트가 다른 출처에서의 리소스를 로드하도록 허용하는 조건을 설정

```txt
# Cross-Origin-Resource-Policy (CORP) 헤더를 요구
Cross-Origin-Embedder-Policy: require-corp
```
