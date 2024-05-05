# hacking tools bettercap

```sh
bettercap -iface eth0

# caplets 설치
caplets.update
caplets.show
```

## arp.spoof로 인터넷 연결이 안될 때

```sh
iptables -A FORWARD -i eth1 -j ACCEPT
iptables -A FORWARD -o eth1 -j ACCEPT
```
