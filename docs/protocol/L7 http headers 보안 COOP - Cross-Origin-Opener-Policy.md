# L7 http headers 보안 COOP - Cross-Origin-Opener-Policy

> 다른 Origin의 리소스를 window 객체나 iframe이 참조하지 못하게 하는 정책
>
> (e.g. window.open('https://example.com'))
>
> > 웹 페이지를 별도의 프로세스로 분리하여 다른 출처의 문서와의 상호작용을 제한함으로써 보안을 강화
> >
> > > html doc 응답에 `Cross-Origin-Opener-Policy` 헤더를 추가하여 설정해야한다.
> > >
> > > api request가 아님

```txt
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Opener-Policy: same-origin-allow-popups
Cross-Origin-Opener-Policy: noopener-allow-popups
Cross-Origin-Opener-Policy: unsafe-none
```

## Cross-Origin-Embedder-Policy (COEP)

> 웹사이트가 다른 출처에서의 리소스를 참조 또는 실행하도록 허용하는 조건을 설정
>
> > COOP로 전부 다 막고 COEP로 일부만 허용하는 방식이다.

```txt
Cross-Origin-Embedder-Policy: require-corp # Cross-Origin-Resource-Policy (CORP) 헤더에서 허용한 리소스만 로드 가능
```
