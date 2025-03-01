# nest OAuth 2.0 & OpenID Connect (OIDC) scenario

1. 사용자가 OAuth 로그인 (scope에 openid를 추가)
2. OAuth 서버는 사용자를 리다이렉트 시키며 accessToken과 함께 idToken을 발급
3. 클라이언트는 accessToken과 idToken을 nestjs 서버로 전송
4. nestjs 서버는 idToken 검증을 위해 OAuth 서버의 jwt key를 가져옴
5. nestjs 서버는 jwt key를 이용하여 idToken을 검증하고 사용자 정보를 추출
6. nestjs 서버는 accessToken을 사용하여 OAuth 서버에 사용자 정보를 요청
7. 응답에 있는 사용자 정보와 고유 ID를 DB에 저장
8. 다음부터는 항상 idToken을 인증을 하고 사용자 정보가 필요시 DB에서 가져옴
