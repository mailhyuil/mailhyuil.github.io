# security tools bettercap

```sh
bettercap -iface eth0

help
help net.probe

set arp.spoof.fullduplex true

arp.spoof on
```

## arp.spoof로 인터넷 연결이 안될 때

```sh
iptables -A FORWARD -i eth1 -j ACCEPT
iptables -A FORWARD -o eth1 -j ACCEPT
```
