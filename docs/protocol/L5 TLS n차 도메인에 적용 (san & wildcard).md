# TLS n차 도메인에 적용

## SAN 방식 (Subject Alternative Name)

> SAN 구매 -> CertPanel
>
> > 각각의 서브 도메인마다 발급 최대 250개
> >
> > > 각각의 서브 도메인마다 인증서를 발급받아야하는 단점이 존재

```sh
domain.com
sub1.domain.com
sub2.domain.com
sub3.domain.com
```

## Wildcard 방식

> wildcard를 이용해서 무제한으로 서브 도메인을 생성가능
>
> > 1개의 인증서로 무제한 서브 도메인을 사용할 수 있다는 장점
> >
> > > 하나의 인증서가 탈취되면 모든 서브 도메인이 위험해진다는 단점이 존재

```sh
*.domain.com
```
