# browser Cookie 종류

## Session Cookie

> 브라우저의 메모리에 저장되며, 브라우저를 닫으면 삭제된다.
>
> > expires, max-age 옵션을 사용하지 않으면 된다.

## Persistent Cookie

> 로컬의 디스크에 저장되며, 만료 기간이 있을 때까지 유지된다.
>
> > max-age, expires 옵션을 사용해 만료 기간을 설정한다.

## First-party Cookie

> 동일한 도메인의 페이지에서만 쿠키를 전송하는 것
>
> > 현재 방문한 페이지의 도메인의 쿠키를 의미한다.

## Third-party Cookie

> 다른 도메인의 페이지에서 설정한 쿠키를 의미
>
> > https://www.example.com에서 https://tracking.com으로 요청을 보냄
> >
> > tracking.com에서 Response로 쿠키를 설정하면 이 쿠키는 Third-party Cookie이다.

## Secure Cookie

> https에서만 전송되는 쿠키
>
> > secure 옵션을 true로 설정

## CHIPS Cookie (Partitioned Cookie)

> third-party cookie를 이용해 다른 사이트에서 사용자를 추적하는 것을 방지하기 위한 방법
>
> 같은 사이트 내에서만 사용자의 행동을 추적할 수 있게 함
>
> 격리된(Partitioned) 상태에서만 동작
>
> > 쿠키를 "사이트별"로 독립적인 저장 공간에 저장 (Partitioning)
> >
> > > 다른 사이트에서는 같은 쿠키라도 접근 불가 (Cross-Site Tracking 차단)
> > >
> > > > 같은 사이트 내에서 iframe이나 서드파티 리소스를 통해 사용 가능
> > > >
> > > > > "Partitioned" 속성을 추가해야 사용 가능

```txt
Set-Cookie: my-cookie=abc123; Secure; HttpOnly; SameSite=None; Partitioned
```
