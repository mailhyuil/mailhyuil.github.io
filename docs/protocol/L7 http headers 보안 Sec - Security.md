# L7 http headers 보안 Sec - Security

> Security(보안)의 약자로, 해당 헤더들이 보안이나 추적 방지(프라이버시), 혹은 안전한 자원 로딩 등을 위해 사용됨을 나타냅니다.
>
> > 일반 User-Agent, Referrer, Cookie 등은 언제든지 변경될 수 있지만 Sec 헤더는 브라우저 내부에서만 동작하므로 변경이 불가능하다.
> >
> > > CORS 같은 보안 정책을 위반하는 클라이언트를 완벽히 차단하고 싶은 경우 Sec 헤더를 통해 보안을 강화할 수 있다.

## 일반 헤더 vs Sec 헤더

```txt
일반 헤더: 사용자가 임의로 변경 가능
Sec 헤더: 브라우저 내부에서만 변경 가능

일반 헤더: 브라우저 뿐만 아니라 모든 클라이언트에서 사용 가능 (e.g. curl, Postman, bot, etc)
Sec 헤더: 브라우저 내부에서만 동작하므로 브라우저에서만 사용 가능
```

## Sec-Fetch-\*

> 현재 요청 시작된 곳의 context 메타데이터를 제공하는 헤더

## Sec-Ch-Ua-\*

> 사용자 에이전트 정보(브라우저·OS 등)를 안전하게 분리·제공하는 Client Hints 헤더

## Sec-Gpc

> Global Privacy Control을 통해 “추적 거부” 의사를 표명

## Sec-WebSocket-\*

> 웹소켓 프로토콜을 위한 보안 헤더
