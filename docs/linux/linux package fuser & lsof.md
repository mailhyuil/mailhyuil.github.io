# linux package fuser & lsof

> 특정 파일이나 디렉토리를 사용하고 있는 사용자, 프로세스를 확인할 수 있음
>
> > 동시에 종료도 가능

## install

```sh
# fuser
apt install psmisc
# lsof
apt install lsof
```

## usage

```sh
fuser -k <port>/tcp
fuser -v file

lsof -i :<port>
lsof -i tcp:<port>
```
