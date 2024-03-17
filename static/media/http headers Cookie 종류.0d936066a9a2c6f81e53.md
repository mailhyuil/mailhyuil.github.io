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

> 다른 도메인의 페이지에서도 쿠키를 전송하는 것
>
> > 현재 방문한 페이지 이외의 도메인의 쿠키를 의미한다.

## Secure Cookie

> https에서만 전송되는 쿠키
>
> > secure 옵션을 true로 설정
