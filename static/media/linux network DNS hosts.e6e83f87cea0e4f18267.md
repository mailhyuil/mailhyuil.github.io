# linux DNS hosts

> 리눅스 os에서 /etc/hosts 파일을 우선적으로 참고하여 name을 ip로 바꿉니다.
>
> > localhost를 127.0.0.1로 바꿔주고, host.docker.internal을 로컬 아이피로 바꿔주는 역할을 합니다.

## /etc/hosts

> /etc/hosts 파일을 수정
>
> window의 경우 C:\Windows\System32\drivers\etc\hosts

```sh
10.0.0.4 myservername
```

## restart network

```sh
/etc/init.d/networking restart
# or
systemctl list-unit-files | grep -i network

systemctl restart networking
systemctl restart NetworkManager
```
