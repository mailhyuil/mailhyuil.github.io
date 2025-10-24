# L7 DNS

> 애플리케이션 계층 (요청을 전송할 때는 L4(TCP, UDP)를 사용한다.)
>
> > 대부분의 DNS 요청은 UDP(포트 53) 사용 빠른 응답이 중요한 일반적인 도메인 조회(쿼리)는 UDP를 사용함.
> >
> > 큰 크기의 응답(512바이트 초과)이나 AXFR(Zone Transfer, DNS 서버 간 데이터 동기화) 같은 중요한 데이터 전송에서는 TCP를 사용함.
> >
> > 브라우저는 먼저 DNS로 요청해서 IP를 받고 이 IP로 TCP 커넥션을 함

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
