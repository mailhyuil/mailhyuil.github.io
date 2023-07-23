# linux signal

> 시그널의 종류

```
1. SIGHUP : 터미널과 연결이 끊겼을 때 발생합니다. 기본적인 처리는 프로세스가 종료되는 것입니다.
2. SIGINT : 인터럽트가 발생했을때 발생합니다. 기본으로 프로세스가 종료됩니다.
9. SIGKILL : 프로세스를 무조건 종료합니다. 절대 무시할 수 없으며 제어될 수도 없습니다.
11. SIGSEGV : 프로세스가 잘못된 메모리를 참조했을 때 발생합니다. 기본 동작은 코어덤프를 남기고 종료합니다.
19 SIGSTOP : 프로세스를 중단시킵니다. 종료한 상태는 아닙니다. 이 신호 역시 제어될 수 없습니다.
```

```
#kill -l

 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP

 6) SIGABRT      7) SIGBUS       8) SIGFPE       9) SIGKILL     10) SIGUSR1

11) SIGSEGV     12) SIGUSR2     13) SIGPIPE     14) SIGALRM     15) SIGTERM

16) SIGSTKFLT   17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP

21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU     25) SIGXFSZ

26) SIGVTALRM   27) SIGPROF     28) SIGWINCH    29) SIGIO       30) SIGPWR

31) SIGSYS      34) SIGRTMIN    35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3

38) SIGRTMIN+4  39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8

43) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12 47) SIGRTMIN+13

48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14 51) SIGRTMAX-13 52) SIGRTMAX-12

53) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7

58) SIGRTMAX-6  59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2

63) SIGRTMAX-1  64) SIGRTMAX
```
