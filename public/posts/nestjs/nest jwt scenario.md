# nest jwt scenario

> jwt의 핵심은 상태를 클라이언트가 가지고 있다는 것이다.
>
> > database에서 유저의 정보를 가져오지 않아도 되기 때문에 (session 방식) 서버의 부하를 줄일 수 있다.
> >
> > > 따라서 user의 정보는 데이터베이스에서 조회하지말고 verify된 payload에서 가져와야한다.

1. 사용자 로그인
2. accessToken 발급 (accessToken내에는 비즈니스로직에 필요한 user의 정보를 포함)
   > 유효기간 15-30분
   >
   > > httpOnly cookie로 전달
3. refreshToken 발급 및 user의 database(postgres or redis)에 저장

   > 유효기간 30일
   >
   > > user db에 저장
   > >
   > > > 유효기간이 지났거나 db에 존재하지 않으면 유효하지 않은 refreshToken으로 판단
   > > >
   > > > > httpOnly cookie로 전달

4. login 유무를 확인할 loggedIn status 값을 일반 쿠키로 전달
5. accessToken 만료 시 서버는 InvalidTokenException을 보내고 client는 refresh api를 통해 새 accessToken 발급
6. logout 시 클라이언트에서 loggedIn 쿠키 삭제, 서버에서 accessToken & refreshToken 삭제
7. refreshToken 만료 시 재발급 요청 (재로그인)
8. accessToken 탈취 의심 시 accessToken을 blacklist에 추가하고 access-token.guard에서 검증
9. refreshToken 탈취 의심 시 user의 database에서 refreshToken 삭제 or blacklist에 추가

## Token 탈취 감지

```txt
1. 서로 다른 ip, user-agent, device에서 같은 accessToken 사용 시
(브라우저 업데이트 또는 네트워크 환경 (wife..) 변경 시 로그아웃 되어버릴 수 있음)

2. rate limiting 감지 시 (Custom ThrottlingGuard에서 처리)
```
