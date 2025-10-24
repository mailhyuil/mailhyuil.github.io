# nest auth jwt key

## 대칭 암호화 사용

> secret key를 사용하여 암호화, 복호화를 수행한다.
>
> > 일반 client - server간 인증에 사용 (키를 공유할 필요없고 검증은 server 내에서만 수행하기 때문)
> >
> > > 성능이 좋음
> > >
> > > > 안전성이 낮음

## 비대칭 암호화 사용

> public key (kid), private key를 사용하여 암호화, 복호화를 수행한다.
>
> > OIDC, OAuth, JWT 서명 검증에 사용
> >
> > > 성능이 떨어짐
> > >
> > > > 안전성이 높음
