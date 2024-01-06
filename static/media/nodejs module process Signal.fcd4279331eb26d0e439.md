# nodejs module process Signal

## Signal 종류

```sh
1: SIGUP # 부모 터미널이 종료된 경우
2: SIGINT # 인터럽트가 발생한 경우 (Ctrl + C)
3: SIGQUIT # 터미널이 끝내려는 경우 (Ctrl + D)
9: SIGKILL # 프로세스 강제로 종료된 경우 (kill -9)

10: SIGUSR1 # 사용자 정의 시그널 1
10: SIGUSR1 # 정상종료

12: SIGUSR2 # 사용자 정의 시그널 2
19: SIGUSR1 # 프로세스가 강제로 멈추는 경우
```
