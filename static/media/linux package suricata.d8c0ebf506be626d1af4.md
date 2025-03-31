# linux package suricata

> 고성능 네트워크 IDS, IPS 및 네트워크 보안 모니터링 시스템
>
> > 네트워크 계층에서 이상한 패킷과 공격을 탐지하고 차단하는 IDS/IPS

## install

```sh
apt install suricata

suricata -s suricata.rules -i eth0
```

## suricata.rules

```sh
alert icmp any any -> any any (msg:"ICMP test detected"; sid:1; rev:1;)
```
