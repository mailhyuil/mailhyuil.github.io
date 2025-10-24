# L4 UDP

> UDP는 매우 단순한 프로토콜, 단순히 데이터를 wrapping하고, IP에게 전달하는 역할만 한다.
>
> UDP는 데이터를 전송하지만 컨트롤하지 않는다.
>
> Stateless protocol
>
> > 실시간 스트리밍 처럼 1바이트 정도 손실이 있어도 큰 문제가 되지 않는 경우에 사용한다.
> >
> > > TCP의 모든 기능이 필요하지 않다면 UDP를 사용하되 특정 기능을 application layer에서 구현하는게 좋다.
> > >
> > > e.g. flow control, error control, congestion control

# 데이터 단위 : 데이터그램

> UDP에서 IP로 데이터를 보내는 단위
