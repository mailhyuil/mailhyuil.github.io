# linux network interface eth0

> 네트워크 인터페이스란 NIC를 의미한다.
>
> > NIC란 Network Interface Card의 약자로 네트워크를 통해 데이터를 주고받기 위한 인터페이스이다.
> >
> > > 컨테이너 환경, 부하분산, 고가용성, 보안등의 이유로 네트워크 인터페이스를 여러개 사용하는 경우가 있다.
> > >
> > > > ec2 인스턴스에 할당된다. (eth0) ec2 인스턴스는 이 인터페이스를 통해 네트워크에 연결된다.

```sh
# ifconfig로 확인

lo0  # 루프백 인터페이스
eth0 # 첫번째 이더넷 인터페이스
en0  # 첫번째 이더넷 인터페이스
gif0 # IPv6 터널링 인터페이스
stf0 # IPv6 터널링 인터페이스
bridge0 # 브릿지 인터페이스
wlan0 # 첫번째 무선 인터페이스
p2p0 # Wi-Fi Direct 인터페이스
utun0 # VPN 인터페이스

llw0 # Apple Low Latency HLS 인터페이스
awdl0 # Apple Wireless Direct Link 인터페이스
ap0 # Apple Personal Hotspot 인터페이스
anpi0 # Apple NPI 인터페이스
```
