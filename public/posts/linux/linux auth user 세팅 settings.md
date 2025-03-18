# linux cmd w & who & whoami & users & logname & id

```sh
[소유자]:[그룹]
```

## root

> 함부로 사용하지 않는 것이 좋다. root 권한은 시스템에 치명적인 영향을 줄 수 있다.

1. 소프트웨어 설치 및 업데이트
2. 시스템 파일 및 설정 변경
3. 사용자 계정 관리
4. 디스크 및 파일 시스템 관리

## group을 이용한 권한 관리

```sh
# 그룹 생성
groupadd <groupname>

# 그룹에 사용자 추가 (e.g. usermod -aG docker <username>)
usermod -aG <groupname> <username>

# 그룹에게 특정파일 권한 추가 (e.g. chown :docker <filename>)
chown :<groupname> <filename>
```

## user를 이용한 권한 관리

```sh
# 사용자 생성
useradd -m -s /bin/bash <username> # -m 홈 디렉토리 같이 생성 -s 기본 쉘 지정

useradd -d /home/<username> # -d 홈 디렉토리 지정 (/home이 아닌 곳을 지정할 경우)
useradd -u 1500 <username> # -u uid를 1500로 설정

# 사용자 비밀번호 설정
passwd <username>

# 사용자에게 권한 특정파일 추가
chown <username> <filename>
```

## docker 사용 시 container 내부에 권한 부여

```sh
# docker container 내부에 사용자 추가
docker run -it --user <username> <image>

# docker container 내부에 그룹 추가
docker run -it --group-add <groupname> <image>
```
