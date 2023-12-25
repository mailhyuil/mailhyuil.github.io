# 이미지 업로드

1. admin에 접속
   > bastion host로 들어오지만 domain을 읽어서 사설 ip admin server로 리디렉션
2. 이미지 업로드 & submit
3. 이미지 담아서 api 서버에 post 요청
4. domain을 읽어서 사설 ip api 서버로

5. api서버에서 s3로 저장 (aws-sdk 사용)
6. s3의 람다 함수 trigger 발동
7. 지정된 lambda 함수로 이미지 받아서 변환 리사이징해서 s3에 저장
8. url 리턴
9. url 받아서 db 서버에 저장 쿼리
10. domain을 읽어서 사설 ip rds 서버에 저장

11. 사용자가 요청
    > bastion host로 들어오지만 domain을 읽어서 사설 ip client server로 리디렉션
12. cloudfront가 요청을 받아서 screen size별로 s3에서 응답 및 캐시
