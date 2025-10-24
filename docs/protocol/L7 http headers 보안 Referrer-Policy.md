# L7 http headers 보안 Referrer-Policy

> HTTP 리퍼러(HTTP Referrer)는 요청이 발생한 `<protocol>://<host>:<port><path><query><fragment>`을 의미한다.
>
> > The HTTP Referrer-Policy 헤더는 referrer의 정보를 얼마나 요청에 포함시킬 것인지를 결정한다.
> >
> > > Referrer에는 파라미터에 사용자의 정보가 포함되어 있을 수 있기 때문에, 보안상의 이유로 제어가 필요하다.

## strict-origin-when-cross-origin

> 대상 주소의 도메인이 같을 경우 전송
>
> > 대상 주소의 도메인이 다를 경우, 도메인만 전송
> >
> > > url 경로, 파라미터를 통한 제어가 불가능

## no-referrer

> referrer를 전송하지 않는다.

## no-referrer-when-downgrade

> 대상 주소가 HTTPS 일때만 전송
>
> > url 경로, 파라미터를 통한 제어 가능

## origin

## origin-when-cross-origin

## same-origin

## strict-origin

## unsafe-url
