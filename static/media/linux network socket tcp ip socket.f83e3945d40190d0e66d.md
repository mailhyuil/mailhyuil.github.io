# linux base tcp/ip socket

> network 통신을 하기 위한 구조체
>
> (Unix Domain Socket은 로컬 프로세스간 통신을 위한 구조체)
>
> > ip와 port의 정보를 포함하고 있으면 이를 통해 통신을 할 수 있다.

## socket descriptor

> file descriptor의 일종 (socket descriptor is a file descriptor)

```sh
# 프로세스의 파일 디스크립터 확인
cd /proc/{pid}/fd # 0, 1, 2 ...
ls -al

lrwx------ 1 root root 64 Apr 28 07:28 0 -> /dev/null
l-wx------ 1 root root 64 Apr 28 07:28 1 -> 'pipe:[22208]'
lrwx------ 1 root root 64 Apr 28 07:28 10 -> 'socket:[24744]'
lrwx------ 1 root root 64 Apr 28 07:28 11 -> 'socket:[24745]'
lrwx------ 1 root root 64 Apr 28 07:28 12 -> 'socket:[24746]'
lrwx------ 1 root root 64 Apr 28 07:28 13 -> 'socket:[24747]'
lrwx------ 1 root root 64 Apr 28 07:29 14 -> 'socket:[24748]'
lrwx------ 1 root root 64 Apr 28 07:29 15 -> 'socket:[24749]'
lrwx------ 1 root root 64 Apr 28 07:29 16 -> 'socket:[24750]'
lrwx------ 1 root root 64 Apr 28 07:29 17 -> 'socket:[24751]'
lrwx------ 1 root root 64 Apr 28 07:29 18 -> 'socket:[24752]'
lrwx------ 1 root root 64 Apr 28 07:29 19 -> 'socket:[24753]'

# socket:[24753] -> socket descriptor:[socket inode]
# socket descriptor는 메모리에 생성된다.
```
