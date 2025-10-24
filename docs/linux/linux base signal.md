# linux base signal

> 시그널이란 프로세스에게 어떤 이벤트가 발생했음을 알리는 것이다.
>
> > 프로세스 종료는 SIGINT를 보낸다. (pm2 기준) (SIGTERM으로 대체할 수도 있음)
> >
> > > SIGINT를 받고 1.6s 동안 exit하지 않으면 SIGKILL을 보낸다.

## 시그널의 종류

```sh
EXIT    : exit() 함수가 호출된 경우

SIGINT  : 인터럽트가 발생한 경우 (Ctrl + C) (ALT + F4)

SIGTERM : 종료를 권고하고 무사히 프로세스를 종료 (kill -15) (kill의 default 값)
SIGKILL : 프로세스 강제 종료 (kill -9)

SIGQUIT
SIGUP
SIGUSR1
SIGUSR2
```
