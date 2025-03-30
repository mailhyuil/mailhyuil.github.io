# linux network iptables NAT

## usage

```sh
# iptables -t nat -A POSTROUTING -s <ip_range> -j MASQUERADE
iptables -t nat -A POSTROUTING -s 192.168.15.0/24 -j MASQUERADE

# 80번 포트로 들어오는 패킷을 <ip>:<port>로 포워딩
iptables -t nat -A PREROUTING --dport <port> --to-destination <ip>:<port>

# save (룰을 영구히 저장장)
sudo iptables-save > /etc/iptables/rules.v4
sudo iptables-restore < /etc/iptables/rules.v4
```
