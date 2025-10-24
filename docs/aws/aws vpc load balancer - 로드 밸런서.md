# aws vpc load balancer - 로드 밸런서

> 다른 가용영역에 public ip 두개 필요

1. route53의 도메인 생성
2. 대상 그룹(private servers) 생성
3. 로드 밸런서 생성 80포트로 받아서 private server로 리디렉션

/\*
네트워크를 구성하는 방법은 다양하다.

route53을 이용해서 request를 받아오는 방법
public server를 이용해서 request를 받아오는 방법
cloudfront 이용하는 방법
api gateway 이용하는 방법
..... 많다..
\*/

## route53 사용

1. 로드밸런서 생성
2. 로드밸런서의 DNS NAME을 route53에서 도메인 호스팅 (값/트래픽 라우팅 대상에서 "Application/Classic Load Balancer에 대한 별칭" 선택)
