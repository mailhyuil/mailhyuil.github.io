# nest jwt scenario

1. 사용자 로그인
2. accessToken 발급
   > 유효기간 15-30분
   >
   > > 일반 cookie로 전달
3. refreshToken 발급 및 user의 database(postgres or redis)에 저장

   > 유효기간 30일
   >
   > > db에 저장
   > >
   > > > 유효기간이 지났거나 db에 존재하지 않으면 유효하지 않은 refreshToken으로 판단
   > > >
   > > > > httpOnly cookie로 전달

4. accessToken은 클라이언트의 메모리에 저장
   > angular service, rxjs, react context..
5. accessToken 만료 시 refreshToken을 이용해 새 accessToken 발급
6. logout 시 클라이언트의 accessToken 삭제 및 서버에서 refreshToken 삭제
7. refreshToken 만료 시 재발급 요청 (재로그인)
8. refreshToken 탈취 의심 시 user의 database에서 refreshToken 삭제 or blacklist에 추가

## Token 탈취 감지

```txt
1. 서로 다른 ip, user-agent, device에서 같은 accessToken 사용 시
2. rate limiting 감지 시 (Custom ThrottlingGuard에서 처리)
```
