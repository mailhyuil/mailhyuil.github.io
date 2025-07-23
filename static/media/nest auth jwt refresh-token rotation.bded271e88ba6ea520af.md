# nestjs jwt refresh token rotation

> Refresh Token은 보통 한 번 발급되면 만료 기간(예: 30일) 동안 동일한 값이 유지됨.
>
> > Refresh Token이 유출되면 공격자가 만료될 때까지 무제한으로 사용할 수 있음!
> >
> > > Refresh Token이 사용될 때마다 새로운 Refresh Token을 발급하고, 기존 토큰을 즉시 폐기함.
> > >
> > > Refresh Token 검증에 실패해도 바로 폐기하는게 좋다.
