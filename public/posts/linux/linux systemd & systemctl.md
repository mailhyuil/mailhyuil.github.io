# linux systemd & systemctl

> systemd : system daemon -> 운영 체제가 부팅될 때 필요한 프로세스를 시작하고 시스템 리소스를 초기화하는 역할
>
> > systemctl : system control -> systemd를 컨트롤하는 명령어

## install

```sh
apt install systemd
```

## 사용

```sh
systemctl enable --now cron.service
systemctl enable --now kubelet
```
