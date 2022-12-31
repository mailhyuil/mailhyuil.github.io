# 유저관리

## 리눅스 사용자 계정 정보는 `/etc/passwd`파일에 기록된다

> `cat /etc/passwd`로 유저리스트 확인

## root, bin, daemon, adm, gaem 등의 자동 생성 계정을 시스템 계정이라 부른다.

## su명령으로 계정을 바꿀 수 있다.

> PAM(Pluggable Authentication Modules)을 이용해 root계정으로 직접 로그인 하는 경우를 막을 수 있다.
> 환경 변수 TMOUT을 설정해 장시간 로그인을 막을 수 있다.

## useradd or adduser

> 사용자 생성
> `useradd name -d /home/name` : 홈 디렉토리도 같이 생성

## passwd

> 사용자 암호 부여

## usermod

> 사용자 수정
> `usermod -u 1001 name` : uid를 1001로 변경

## userdel

> 사용자 삭제

## groups

> 사용자가 속한 모든 그룹을 출력

## su

> 사용자 전환
