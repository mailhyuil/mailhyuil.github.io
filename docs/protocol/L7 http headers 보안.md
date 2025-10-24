# L7 http headers 보안

> 여러가지 보안 정책 헤더가 존재하고 이 헤더들을 지원하는 브라우저는 이 헤더들을 사용하여 보안을 강화할 수 있다.

## Same-Origin Policy (SOP)

> 웹 페이지에서 다른 출처의 리소스를 불러오는 것을 제한하여, XSS 및 CSRF 공격을 방지하는 보안 정책
>
> > 다른 출처의 리소스를 불러오는 것을 제한하여, 민감한 정보가 외부로 유출되는 것을 방지
> >
> > > 1차 방어선의 역할이며 proxy 서버를 통해 언제든지 우회할 수 있다.
> > >
> > > > CORS를 통해 다른 Origin을 허용할 수 있다.

## Content-Security-Policy (CSP)

> A powerful allow-list of what can happen on your page which mitigates many attacks
>
> > 웹 페이지에서 허용되는 콘텐츠 소스를 정의하여 XSS 및 데이터 삽입 공격을 방지하는 강력한 보안 도구

## Cross-Origin-Opener-Policy (COOP)

> Helps process-isolate your page
>
> > 웹 페이지를 별도의 프로세스로 분리하여 다른 출처의 문서와의 상호작용을 제한함으로써 보안을 강화
> >
> > > 다른 출처의 창이나 탭에서 현재 페이지를 참조하거나 조작하는 것을 방지

```txt
Cross-Origin-Opener-Policy: unsafe-none | same-origin-allow-popups | same-origin
```

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

## Origin-Agent-Cluster

> Changes process isolation to be origin-based
>
> > 기본적으로 동일한 출처의 문서들이 동일한 프로세스에서 실행되지만, 이 헤더를 사용하면 특정 출처의 문서를 별도의 프로세스로 분리하여 메모리 안전성을 높일 수 있다.

## Referrer-Policy

> Controls the Referer header
>
> > 페이지에서 다른 페이지로 이동할 때 Referer 헤더에 포함되는 정보의 양을 제어하여 개인정보 유출을 방지

## Strict-Transport-Security (HSTS)

> Tells browsers to prefer HTTPS
>
> > 브라우저에게 해당 사이트는 항상 HTTPS를 통해서만 접근해야 한다는 것을 알려주어, 중간자 공격을 방지

## X-Content-Type-Options

> Avoids MIME sniffing
>
> > 브라우저가 MIME 타입을 추측하여 잘못된 방식으로 콘텐츠를 실행하지 않도록 nosniff 값을 설정하여 MIME 스니핑을 방지

## X-DNS-Prefetch-Control

> Controls DNS prefetching
>
> > 브라우저의 DNS 프리페치 기능을 제어하여, 사용자가 링크를 클릭하기 전에 미리 DNS 조회를 수행할지 여부를 결정

## X-Permitted-Cross-Domain-Policies (deprecated)

> Controls cross-domain behavior for Adobe products, like Acrobat

## X-Download-Options (deprecated)

> Forces downloads to be saved (Internet Explorer only)

## X-Frame-Options (deprecated)

> Legacy header that mitigates clickjacking attacks

## X-Powered-By (deprecated)

> Info about the web server. Removed because it could be used in simple attacks

## X-XSS-Protection (deprecated)

> Legacy header that tries to mitigate XSS attacks, but makes things worse, so Helmet disables it
