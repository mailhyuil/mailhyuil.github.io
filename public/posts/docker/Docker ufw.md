# Docker ufw

> Docker를 사용하면 ufw가 적용되지 않는다.
>
> > Docker makes changes directly on your iptables, which are not shown with ufw status.

## 해결방법

> /etc/docker/daemon.json 에 추가

```json
{ "iptables": false }
```
