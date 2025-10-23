# kube base Network

## Switching

> 컴퓨터 a에서 b로 패킷을 보내주는 장치
>
> > "네트워크 내"의 다른 장치로 데이터를 전달하는 역할을 하는 장치

```txt
A(192.168.0.2):interface --switch(192.168.0.0)-- interface:B(192.168.0.1)

ip link # network interface 확인
ip addr add <a_ip_address> dev <interface> # interface에 ip 할당
ip addr add <b_ip_address> dev <interface> # interface에 ip 할당
```

## Routing

> "다른 네트워크"로 패킷을 보내주는 장치

```txt
switch(192.168.1.0) -- router(192.168.0.254) -- switch(192.168.2.0)
```

## Gateway

> 네트워크 내에서 외부 네트워크로 나가는 출입구 역할을 하는 장치
>
> > Router가 Gateway 역할을 한다.

```txt
route # routing table 확인
ip route add 192.168.2.0/24 via 192.168.1.1
ip route add 192.168.1.0/24 via 192.168.2.1

# 호스트간 패킷 전달
cat /proc/sys/net/ipv4/ip_forward
0 # 0이면 패킷 전달 안함
1 # 1이면 패킷 전달 함
```

## Internet Gateway

```txt
# 172.217.194.0는 구글 IP 대역
ip route add 172.217.194.0 via 192.168.1.1
```
