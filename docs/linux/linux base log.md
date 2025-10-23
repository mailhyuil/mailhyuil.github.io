# linux base log

## /var/log/syslog

> 시스템에서 발생하는 모든 로그가 기록되는 파일
>
> > logs everything, except auth related messages.
> >
> > > 서버 확인 systemctl status rsyslog

## journalctl

> systemd의 로그를 확인하는 명령어
>
> > journalctl -u nginx.service
> >
> > > journald 서버가 기동되어 있어야 함

## /var/log/messages

> 시스템에서 발생하는 표준 메시지가 기록되는 파일
>
> > non-debug and non-critical messages. This log should be considered the "general system activity" log.
> >
> > 디버그 용도가 아닌 일반적인 시스템 활동 로그만 기록되니 디버깅을 하기 위해서는 /var/log/syslog 파일을 참조

## /var/log/secure

> 인증과 관련된 로그가 기록
>
> > 로그인, tcp_wrappers, xinetd 관련 로그

## /var/log/kern.log

> 커널 로그

## /var/log/lastlog

> 마지막으로 로그인한 사용자의 정보가 기록

## /var/log/dmesg

> 부팅 기록

## /var/log/wtmp

> 로그인 성공 기록

## /var/log/btmp

> 로그인 실패 기록

## /var/log/sulog

> su 명령어 사용 기록

## /var/log/boot.log

> 부팅시 파일 시스템 마운트, 네트워크 설정, 서비스 시작 등 부팅과 관련된 로그

## /var/log/cron

> cron 관련 로그

## /var/log/maillog

> 메일 관련 로그

## /var/log/xferlog

> ftp 로그

## /var/log/nginx/access.log

> nginx 접속 로그

## /var/log/nginx/error.log

> nginx 에러 로그
