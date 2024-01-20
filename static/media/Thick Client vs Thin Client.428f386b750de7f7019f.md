# Thick Client vs Thin Client

## Thick Client (Fat Client)

> 클라이언트에서 많은 로직을 처리하는 것
>
> > state를 브라우저에 저장한다.
> >
> > > 서버에 ajax 요청으로 데이터를 받아옴

## Thin Client

> 클라이언트는 간단한 렌더링정도의 연산만 하고 나머지는 서버에서 로직을 처리하는 것
>
> > business application은 Thin Client가 더 적합하다.
> >
> > > state를 서버에 저장한다.
> > >
> > > > html diff 만 전송한다.
