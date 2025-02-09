# linux network iptables 방화벽

## usage

```sh
# 기본 정책: 모든 입력 트래픽 DROP
sudo iptables -P INPUT DROP

# 이미 허용된 연결 유지
sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# 로컬 루프백 허용
sudo iptables -A INPUT -i lo -j ACCEPT

# SSH 허용
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# HTTP 허용
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT

# 출력 트래픽 허용
sudo iptables -P OUTPUT ACCEPT

# 확인
sudo iptables -L -v

# save (룰을 영구히 저장장)
sudo iptables-save > /etc/iptables/rules.v4
sudo iptables-restore < /etc/iptables/rules.v4
```
