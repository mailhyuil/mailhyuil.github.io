# DNS

> 애플리케이션 계층
>
> > 먼저 dns로 요청해서 ip를 받고 이 ip로 tcp 커넥션을 함

## domain

> 도메인은 인터넷상의 컴퓨터를 식별하는 호스트명이다.
>
> > 뒤에서 부터 최상위 도메인, 최하위 도메인 순으로 읽는다.

```sh
절대 도메인 (FQDN) : admin.mailhyuil.com # Fully Qualified Domain Name
루트 도메인 : mailhyuil.com
최상위 도메인 (1차 도메인) : com
하위 도메인 (2차 도메인, 도메인 네임, 1차 도메인의 서브 도메인) : mailhyuil
최하위 도메인 (3차 도메인, 호스트 네임, 2차 도메인의 서브 도메인) : admin
```
