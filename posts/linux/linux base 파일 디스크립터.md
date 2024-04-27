# linux base 파일 디스크립터

> os가 파일 또는 소켓을 식별하기 위한 "정수값" (파일이 아니다!)
>
> > 프로세스가 파일이나 소켓에 접근하고 데이터를 읽거나 쓸 때 사용
> >
> > > 각 프로세스의 파일 디스크립터 테이블에 저장

## file descriptor table

> 프로세스가 현재 사용중인 파일을 관리하기 위한 테이블이며, 프로세스마다 하나씩 가지고 있다.

## file table (open file table)

> open된 파일의 읽기/쓰기 동작을 지원하기 위한 테이블. 파일이 열릴 때마다 하나씩 할당된다.

## VFS (Virtual File System) inode table

> 파일 시스템의 inode를 관리하기 위한 테이블
