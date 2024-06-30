# linux systemd & systemctl

> systemd : system daemon -> 운영 체제가 부팅될 때 필요한 프로세스를 시작하고 시스템 리소스를 초기화하는 역할
>
> > systemctl : system control -> systemd를 컨트롤하는 명령어

## install

```sh
apt install systemd -y
```

## usage

```sh
systemctl status cron.service # 상태 확인
systemctl start cron.service # 서비스 시작
systemctl stop cron.service # 서비스 중지
systemctl restart cron.service # 서비스 재시작
systemctl enable cron.service # 부팅시 자동 실행 등록
systemctl disable cron.service # 부팅시 자동 실행 해제

systemctl enable cron.service --now # 부팅시 자동 실행 등록 및 시작
systemctl enable kubelet --now

systemctl is-enabled cron.service # 부팅시 자동 실행 여부 확인

systemctl list-units # 실행중인 서비스 목록
```
