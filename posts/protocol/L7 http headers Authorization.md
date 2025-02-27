# http headers Authorization

> HTTP 인증(Authorization)은 웹 서버의 비밀번호 같은 역할

## Basic

> 아이디와 비밀번호로 인증할 때 사용
>
> > base64로 인코딩된 사용자 ID, 비밀번호 쌍을 인증 정보(credentials) 값으로 사용합니다.
> >
> > > 사용자 ID와 비밀번호는 위와 같이 콜론으로 구분합니다.
> > >
> > > > Base64로 인코딩한 정보는 쉽게 디코딩이 가능해서 Basic 인증은 반드시 HTTPS/TLS와 함께 사용해야 합니다.
> > > >
> > > > > Basic 인증 후 응답으로 WWW-Authenticate 헤더를 보내면 브라우저는 메모리에 credentials를 저장하고 자동으로 Authorization 헤더를 추가합니다.

```sh
Authorization: Basic <BASE64_USERNAME>:<BASE64_PASSWORD>
```

# Bearer

> jwt 같은 토큰 인증 방식에서 사용
>
> > OAuth 2.0 프레임워크 또는 JWT에서 사용하는 토큰 인증 방식

```sh
Authorization: Bearer <credentials>
```
