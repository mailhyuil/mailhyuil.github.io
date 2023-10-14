# linux iptables

> iptables는 리눅스상에서 방화벽을 설정하는 도구

```sh
iptables -A INPUT -s [발신지] --sport [발신지 포트] -d [목적지] --dport [목적지 포트] -j [정책]
```
