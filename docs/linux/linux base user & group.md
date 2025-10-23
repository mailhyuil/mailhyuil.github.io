# 유저관리

> > root, bin, daemon, adm 등의 자동 생성 계정을 시스템 계정이라 부른다.
> >
> > > su명령으로 계정을 바꿀 수 있다.
> > >
> > > PAM(Pluggable Authentication Modules)을 이용해 root계정으로 직접 로그인 하는 경우를 막을 수 있다.
> > >
> > > 환경 변수 TMOUT을 설정해 장시간 로그인을 막을 수 있다.

## user command

> /etc/passwd 파일에 기록된다.
> 사용자이름:암호:사용자ID:그룹ID:추가정보:홈디렉토리:쉘

```sh
useradd # useradd <username> -d /home/<username> : 홈 디렉토리도 같이 생성
passwd # passwd <username> : 암호 설정
usermod # usermod -u 1001 name : uid를 1001로 변경
userdel # userdel -r <username> : 사용자 삭제 // -r 관련 모든 파일 삭제
users # users : 현재 로그인한 사용자 출력
```

## group command

> /etc/group 파일에 기록된다.
>
> > 사용자 권한 관리를 위해 그룹을 사용한다.
> >
> > > /etc/group 파일 뒤에 :사용자1,사용자2,사용자3... 형식으로 사용자에게 권한을 추가할 수 있다.

```sh
groupadd # groupadd <groupname>
groupmod # groupmod -g 1001 name : gid를 1001로 변경
groupdel # groupdel <groupname>
groups # groups <username> : 사용자가 속한 모든 그룹을 출력

newgrp # newgrp <groupname> : 현재 사용자의 그룹을 변경
```

## 권한

```sh
chmod # chmod <mode> <filename>
chown # chown <user> <filename> / chown <user>:<group> <filename>
chgrp # chgrp <group> <filename>
```
