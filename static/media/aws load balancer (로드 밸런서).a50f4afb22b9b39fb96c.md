# 로드 밸런서

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
