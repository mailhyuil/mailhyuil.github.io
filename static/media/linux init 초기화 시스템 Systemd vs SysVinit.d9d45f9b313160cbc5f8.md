# linux base Systemd vs SysVinit

> pstree 명령어로 어떤 초기화 시스템을 사용하는지 확인 가능
>
> > 최상위 프로세서로 pid가 1인 프로세스가 초기화 시스템

## sysvinit

> /etc/init.d의 셸 스크립트를 통해 시작 프로세스를 처리
>
> > service 명령어

## systemd

> /etc/systemd/system/.service 파일을 통해 프로세스를 처리
>
> > systemctl 명령어
