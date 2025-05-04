# linux package manager yum download

> rpm 확장자

## install

> yumdownloader를 사용 시

```sh
yum install yum-utils -y
```

## usage

```sh
# 설치가 안되어있는 경우
yum install -y --resolve --downloadonly --downloaddir=./rpm docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin  docker-ce-rootless-extras

# 이미 설치되어 있는 경우
yum reinstall -y --resolve --downloadonly --downloaddir=./rpm docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin  docker-ce-rootless-extras

# yumdownloader를 사용 시
yumdownloader --resolve docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin --destdir=./rpm
```
