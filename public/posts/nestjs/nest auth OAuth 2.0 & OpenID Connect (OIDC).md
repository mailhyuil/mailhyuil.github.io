# nest OAuth 2.0 & OpenID Connect (OIDC)

> OAuth 2.0은 Authorization Framework이며
>
> OpenID Connect는 OAuth 2.0 위에 구축된 인증(Authentication) 프로토콜이다.

## OAuth 2.0

> OAuth 2.0은 인가(authorization)를 위한 프레임워크이다.
>
> > 클라이언트가 google login 시 google에서 발급해주는 accessToken은 google의 다른 api를 이용하기 위한 token이지 user의 인증을 위한 token이 아니다.
> >
> > 즉 Oauth 2.0의 accessToken은 사용자의 state를 가지고 있지 않다.
> >
> > > 사용 토큰 : accessToken, refreshToken
> > >
> > > > 만약 accessToken으로 사용자 profile을 가져와 값 db에 저장하고 매번 그 값을 비교해 인증을 수행한다면
> > > >
> > > > 다른 비슷한 로직의 서비스에서 사용자가 자신의 profile을 사용해서 인증을 수행할 수 있다. (id는 항상 같기 때문에)

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
