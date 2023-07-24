# HTTP Basic 인증 방식

> HTTP 인증(Authorization)은 웹 서버의 비밀번호 같은 역할
>
> > 클라이언트에서 base64로 인코딩된 사용자 ID, 비밀번호 쌍을 인증 정보(credentials) 값으로 사용합니다.
> >
> > > 사용자 ID와 비밀번호는 위와 같이 콜론으로 구분합니다.
> > >
> > > > Base64로 인코딩한 정보는 쉽게 디코딩이 가능해서 Basic 인증은 반드시 HTTPS/TLS와 함께 사용해야 합니다.

## Authorization 헤더

```
Authorization: Basic base64({USERNAME}:{PASSWORD})
```
