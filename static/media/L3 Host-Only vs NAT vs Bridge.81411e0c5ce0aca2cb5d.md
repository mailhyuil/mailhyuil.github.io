# protocol L3 Host-Only vs NAT vs Bridge

> 네트워크 가상화 설정 방식

## Host-Only

> 외부와 단절된 내부 네트워크를 구축하는 것
>
> > 내부 기기들은 내부 네트워크에서만 통신이 가능

## NAT (Network Address Translation)

> Host로부터 내부 기기들이 IP를 할당 받아 사용 (DHCP)
>
> > 자체 DHCP 서버를 사용하여 IP를 할당 및 통신
> >
> > > Host를 통해 외부와 통신이 가능

## Bridge

> 공유기로부터 IP를 할당 받아 사용
>
> > Host와 동일한 네트워크 대역의 IP를 갖게 된다.
> >
> > > 공유기를 통해 외부 네트워크와 통신이 가능
