# nest OAuth 2.0 & OpenID Connect (OIDC)

> OAuth 2.0은 Authorization Framework이며
>
> OpenID Connect는 OAuth 2.0 위에 구축된 인증(Authentication) 프로토콜이다.

## OAuth 2.0

> OAuth 2.0은 인가(authorization)를 위한 프레임워크이다.
>
> > 사용 토큰 : accessToken, refreshToken
> >
> > > 클라이언트가 google login 시 google에서 발급해주는 accessToken은 google의 다른 api를 이용하기 위한 token이지 user의 인증을 위한 token이 아니다.
> > >
> > > accessToken은 사용자의 state를 가지고 있지 않다.
> > >
> > > accessToken은 실제로 해당 서비스의 서버에서 발급되었는지를 확인할 방법이 없다.
> > >
> > > 만약 같은 로직의 다른 서비스에서 같은 OAuth 서비스의 accessToken을 발급받고 서비스로 돌아와서 accessToken을 서버로 보내면 인증이 가능해진다.
> > >
> > > > 따라서 accessToken으로 인증을 진행할 경우 app_id등을 확인하는 로직이 필요하다.

## OpenID Connect

> OpenID Connect는 OAuth 2.0 위에 구축된 인증(Authentication) 프로토콜이다.
>
> > google OpenID Connect의 ID Token으로 인증을 해야한다.
> >
> > oidc의 idToken은 사용자의 state를 가지고 있다. (따라서 jwt와 같은 stateless 방식의 인증이 가능하다.)
> >
> > > 사용 토큰 : idToken, accessToken, refreshToken
> > >
> > > > OAuth2에서 scope에 openid를 추가하면 accessToken과 함께 idToken을 받을 수 있다.
