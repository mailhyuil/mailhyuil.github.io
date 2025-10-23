# linux package manager dnf download

> rpm 확장자

## usage

```sh
# download
# --resolve는 디펜던시도 같이 설치해준다. (이미 설치되어있는 디펜던시는 설치안함)
# --alldeps는 이미 설치되어있는 디펜던시도 다운로드해준다.
dnf download --resolve --alldeps docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin --destdir=./rpm

# install
# --skip-broken은 버전충돌 같은 broken이 있는 rpm은 설치를 skip한다.
dnf --disablerepo=* --skip-broken install ./rpm/*.rpm
```
