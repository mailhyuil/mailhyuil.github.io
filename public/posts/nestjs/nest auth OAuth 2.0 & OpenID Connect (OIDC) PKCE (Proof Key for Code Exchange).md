# nest OAuth 2.0 & OpenID Connect (OIDC) PKCE (Proof Key for Code Exchange)

> OAuth 2.0의 보안 취약점(인증 코드 가로채기)를 보완하기 위한 PKCE(Proof Key for Code Exchange)를 사용한 OpenID Connect(OIDC) 인증 방식
>
> > client가 OAuth 서버로부터 받은 code를 가로채기 당하는 경우를 대비해
> >
> > code_verifier와 code_challenge를 사용하여 code를 요청하고, code를 받은 후 code_verifier를 사용하여 token을 요청하는 방식

## scenario

```txt
클라이언트가 code_challenge를 생성 후 인증 요청을 보냄
인증서버는 code_challenge를 저장하고 인증 진행 인증 후 클라이언트에게 code를 발급
클라이언트는 code를 받은 후 code_verifier를 사용하여 token을 요청
```
