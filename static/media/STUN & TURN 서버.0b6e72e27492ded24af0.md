# STUN & TURN 서버

## STUN 서버

> Session Traversal Uilities for NAT
>
> > 공용 IP를 알려주는 서버
> >
> > > NAT환경에서는 Private IP를 별도로 가지고 있기 때문에 Peer to Peer(이하 P2P) 통신이 불가능
> > >
> > > > STUN 서버에 요청을 보내 공용 IP를 알아낸 후 공용 IP를 이용하여 P2P 통신을 할 수 있게 된다.

## TURN 서버

> Traversal Using Relays around NAT
>
> > 클라이언트들이 통신할 때 Public 망에 존재하는 TURN 서버를 경유하여 통신

## ICE

> Interactive Connectivity Establishment
>
> > Client가 모든 통신 가능한 주소를 식별하는 것을 의미
