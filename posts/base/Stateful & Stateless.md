# Stateful & Stateless

## Stateful

> client의 state를 server의 "메모리"에 저장하는 방식
>
> > 세션을 사용하는 경우 stateful하다. (서버를 껐다 켜면 세션 정보가 사라짐)
> >
> > > TCP, QUIC는 stateful하다. (연결을 유지해야하기 때문)

## Stateless

> client의 state를 client "메모리"에 저장하지 않는다, 또는 다른 저장소에 저장 (DB, 쿠키 등)
>
> > jwt를 사용하는 서버는 stateless하다. (서버를 껐다 켜도 서비스가 정상적으로 동작)
> >
> > > UDP, HTTP는 stateless하다. (연결을 유지하지 않아도 되기 때문)
