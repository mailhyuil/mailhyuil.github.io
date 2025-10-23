# pm2 port 80, 443 permission

> pm2로 80, 443 포트를 사용하려면 root 권한이 필요하다.
>
> > sudo로 실행하거나 다른 포트를 사용해라

## 해결법

> 80을 직접 사용하지 않고 8080을 사용하고, 443을 직접 사용하지 않고 8443을 사용한다.
>
> > 그리고 iptables를 사용하여 80, 443 포트로 들어오는 요청을 8080, 8443 포트로 포트포워딩한다.

```bash
# Dont use port 80, run on other port like 8080 and redirect 80 to that port with this command
sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080
```
