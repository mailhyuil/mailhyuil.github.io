# linux base 파일 디스크립터

> os가 프로세스가 사용하는 열린 파일, 소켓을 식별하기 위한 "정수값" (파일이 아니다!)
>
> > 프로세스가 파일이나 소켓에 접근하고 데이터를 읽거나 쓸 때 사용 (file descriptor -> opened file -> inode)

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

# pipe:[22208] -> pipe descriptor:[pipe inode]
# socket:[24753] -> socket descriptor:[socket inode]
```

## file descriptor table

> 프로세스가 현재 사용중인 파일을 관리하기 위한 테이블이며, 프로세스마다 하나씩 가지고 있다.

## file table (open file table)

> open된 파일의 읽기/쓰기 동작을 지원하기 위한 테이블. 파일이 열릴 때마다 하나씩 할당된다.

## inode table

> 파일 시스템의 inode를 관리하기 위한 테이블
