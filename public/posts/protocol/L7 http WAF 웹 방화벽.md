# http WAF (Web Application Firewall) 웹 방화벽

> 단순 방화벽(FW)은 TCP/IP 레벨에 포함된 정보들을 기반으로 차단 룰을 설정
>
> > 하지만 웹 방화벽은 웹 프로토콜 HTTP 정보를 바탕으로 차단 룰을 설정
> >
> > > ModeSecurity, NAXSI, WAF-FLE 등 또는 aws같은 클라우드에서 제공하는 WAF 솔루션이 있다
> > >
> > > > WAF는 웹서버의 미들웨어로 동작한다.
> > > >
> > > > 웹서버가 WAF 모듈을 사용해서 요청을 먼저 검사하고 차단하는 방식

## WAF의 역할

1. 요청(request) 필터링
   - 클라이언트로부터 웹 요청이 들어올 때 웹 서버 또는 다른 모듈들이 처리하기 전에 Modsecurity가 요청 내용을 분석하여 사전에 필터링한다.
2. 우회 방지 기술

   - 경로와 파라미터를 분석하기 전에 정규화시켜 우회 공격을 차단한다.
   - 즉, "//", "\/", ".", "%00" 등 우회 공격용 스트링을 제거하고, 인코딩된 URL을 디코딩한다.

3. HTTP 프로토콜 이해

   - 엔진이 HTTP 프로토콜을 이해하기 때문에 아주 전문적이고 미세한 필터링을 수행할 수 있다.

4. POST 페이로드(payload)

   - GET 방식 뿐만 아니라 POST 메소드를 사용해서 전송되는 컨텐츠도 가로채어 분석할 수 있다.

5. 감사 로깅

   - POST를 포함하여 모든 요청의 모든 상세한 부분들까지 추후 분석을 위해서 로깅될 수 있다.
   - Modsecurity에서 차단 기능을 비활성화시킨 후, 강력한 로깅 기능만으로 침입탐지 시스템 역할을 수행할 수 있도록 한다.

6. HTTPS 필터링

   - 엔진은 웹 서버에 임베디드되어 있기 때문에 복호화 한 후에 요청 데이터에 접근하여 HTTPS를 통한 공격도 필터링할 수 있다.
