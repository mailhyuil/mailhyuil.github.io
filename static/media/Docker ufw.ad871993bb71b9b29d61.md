# Docker ufw

> Docker의 -p (ports) 기능을 사용하면 ufw가 적용되지 않는다.
>
> > Docker makes changes directly on your iptables, which are not shown with ufw status.
> >
> > > iptables를 직접 사용하거나 밑의 해결방법을 사용하면 해결된다.

## 해결방법

> /etc/docker/daemon.json 에 추가

```json
{ "iptables": false }
```
