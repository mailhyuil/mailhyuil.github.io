# linux network iptables

## usage

```sh
# 서버 1로 트래픽의 50% 분산
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -m statistic --mode random --probability 0.5 -j DNAT --to-destination 192.168.1.101:80

# 나머지 트래픽을 서버 2로 분산
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 192.168.1.102:80

# 마스커레이드 활성화
sudo iptables -t nat -A POSTROUTING -j MASQUERADE

# 확인
sudo iptables -t nat -L -v

# save (룰을 영구히 저장장)
sudo iptables-save > /etc/iptables/rules.v4
sudo iptables-restore < /etc/iptables/rules.v4
```
