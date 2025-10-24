# linux profile strace

> 프로세스의 syscall과 signal을 추적하여 성능저하, 에러를 디버깅하는 툴

```sh
strace -s 65535 -f -t -o strace_dump -p [pid]
```
