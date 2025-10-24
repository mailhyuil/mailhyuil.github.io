# base MTU

> 최대 전송 단위
>
> > default : 1500

```sh
# 확인
ifconfig | grep mtu

# 일시적 변경
ifconfig [interface] mtu 1500

# 영구적 변경
vi /etc/netplan/00-installer-config.yaml # yaml에서 mtu 변경
```
