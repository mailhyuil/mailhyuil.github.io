# linux network iptables 포트 포워딩

## usage

```sh
# IP 포워딩 활성화
echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward

# NAT 테이블에 포트 포워딩 규칙 추가
sudo iptables -t nat -A PREROUTING -p tcp --dport 8080 -j DNAT --to-destination 192.168.1.100:80

# 마스커레이드 활성화 (소스 IP 변경)
sudo iptables -t nat -A POSTROUTING -j MASQUERADE

# 확인
sudo iptables -t nat -L -v

# save (룰을 영구히 저장장)
sudo iptables-save > /etc/iptables/rules.v4
sudo iptables-restore < /etc/iptables/rules.v4
```
