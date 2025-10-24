# L7 http headers Cookie options Domain & Path

> 쿠키를 전송할 서버에 대해 제한을 두는 옵션

## Domain

> "쿠키를 전송할 서버"의 domain을 지정하는 옵션
>
> > 도메인 + 서브 도메인도 쿠키 접근 가능
> >
> > > example.com 에서 지정하면 sub.example.com 에서도 쿠키 접근 가능

## Path

> "쿠키를 전송할 서버"의 path를 지정하는 옵션
>
> > 이 경로를 포함한 하위 경로 페이지만 쿠키 접근
> >
> > > 일반적으로 path=/ 루트로 지정
