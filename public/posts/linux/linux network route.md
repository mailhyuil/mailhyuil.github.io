# linux network route

> 라우팅 테이블(route table)을 보여주거나 수정하는 명령어
>
> > Destination, Gateway, Netmask, Interface, Metric, Next Hop
> >
> > > 명령어에서 dev는 device를 의미한다.
> > >
> > > > ip route를 사용하는 것이 더 좋다.

```sh

route add <Destination_Ip> <Network_Gateway> # Network에 속한 컴퓨터가 Destination으로 메세지를 보낼 수 있게된다.

route add -net <Destination_Network_Gateway> <Network_Gateway> # Network에 속한 컴퓨터가 Destination_Network으로 메세지를 보낼 수 있게된다.

route add -net 10.0.0.0 netmask 255.255.255.0 gw 10.0.0.1
route add -host 10.0.0.25 dev eth0
```
