# http headers 보안 Cross-Origin-Embedder-Policy (COEP)

> 웹사이트가 다른 출처에서의 리소스를 로드하도록 허용하는 조건을 설정
>
> > CORP로 전부 막힌 정적 리소스를 일부 Origin 등에 허용해주는 정책
> >
> > > CORS를 필요로한다.

```txt
# CORS 또는 CORP 로 허용된 Origin에서 로드가능
Cross-Origin-Embedder-Policy: require-corp
```
