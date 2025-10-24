# linux init systemd log - journalctl

> journalctl 명령어로 systemd 로그 확인 가능
>
> > /var/log/syslog, /var/log/messages, /var/log/kern.log 등의 로그 파일을 확인할 수 있음

```sh
journalctl -u kubelet
```
