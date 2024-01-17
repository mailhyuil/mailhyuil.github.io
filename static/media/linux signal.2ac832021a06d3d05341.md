# linux signal

> 시그널이란 프로세스에게 어떤 이벤트가 발생했음을 알리는 것이다.

## 시그널의 종류

```sh
SIGUP   : 부모 터미널이 종료된 경우
SIGINT  : 인터럽트가 발생한 경우 (Ctrl + C) (ALT + F4)
SIGQUIT : 터미널이 끝내려는 경우 (Ctrl + D)
SIGKILL : 프로세스 강제로 종료된 경우 (kill -9)
SIGUSR1	: 사용자 정의 시그널 1
SIGUSR2	: 사용자 정의 시그널 2
SIGUSR1	: 정상종료
SIGUSR1	: 프로세스가 강제로 멈추는 경우

...
```
