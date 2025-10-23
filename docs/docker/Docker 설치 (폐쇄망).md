# docker 설치 (폐쇄망)

> downloadonly 시 rpm으로 다운로드 받음 (window의 exe와 같은 것)
>
> > 이것을 폐쇄망에 옮겨서 yum으로 다시 실행

```sh
# download
# --resolve는 디펜던시도 같이 설치해준다. (이미 설치되어있는 디펜던시는 설치안함)
# --alldeps는 이미 설치되어있는 디펜던시도 다운로드해준다.
dnf download --resolve --alldeps docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin --destdir=./rpm

tar czf docker_rpm.tar.gz rpm
scp -i .pem docker_rpm.tar.gz ubuntu@ip:/home/ubuntu
tar xvf docker_rpm.tar.gz

# install
# --skip-broken은 버전충돌 같은 broken이 있는 rpm은 설치를 skip한다.
dnf --disablerepo=* --skip-broken install ./rpm/*.rpm
```
