# ARP Spoofing

> victim이 인터넷을 이용할 때, hacker가 중간에서 패킷을 가로채는 공격
>
> > MITM (Man In The Middle) 이라고도 함

```sh
victim --request--> hacker --request--> access point(Router)
victim <--response-- hacker <--response-- access point(Router)
```

```sh
arp -a
```
