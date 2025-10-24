# L7 DNS 세팅 등록 순서

1. nslookup으로 네임서버(ns)가 어딘지 먼저 확인하기
2. 도메인 구입처가 네임서버(ns) 관리처가 된다
   > 도메인을 구입한 곳에서만 네임서버(ns)를 변경할 수 있다.
   >
   > > 네임서버(ns)를 관리하는 능력은 오직 도메인 구입처에만 있다. (도메인을 양도받은 경우 제외)
3. 도메인 구입처와 호스팅 서비스 업체가 다를 경우
   > 호스팅 서비스 업체에서 호스팅 영역(zone)을 생성하면 네임서버(ns)를 준다
   >
   > > 그 네임서버(ns)의 ip를 도메인 구입처에 등록해줘야한다.

## 예시

```txt
whois에서 도메인을 구입해서 cafe24에서 호스팅을 하는 경우
-> cafe24의 ns ip를 whois에 등록

cloudflare에서 도메인을 구입해서 cafe24에서 호스팅을 하는 경우
-> cafe24의 ns ip를 cloudflare에 등록

cafe24에서 도메인을 구입해서 aws의 에서 호스팅을 하는 경우
-> aws의 route53에서 hosting zone을 생성하면 ns ip를 준다 그 ip를 cafe24에 등록

cloudflare에서 도메인을 구입해서 NHN Cloud에서 호스팅을 하는 경우
-> nhn cloud의 dns plus에서 DNS zone을 생성하면 ns ip를 준다 그 ip를 cloudflare에 등록
```
