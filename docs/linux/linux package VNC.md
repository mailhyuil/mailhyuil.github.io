# linux package VNC

> 원격 데스크톱 접속 프로그램

## install

```sh
# vncserver 설치
apt install vnc4server -y

# vnc 클라이언트 설치
apt install xtightvncviewer -y

# gnome 설치
apt install gnome-panel -y
apt install gnome-settings-daemon -y
apt install metacity -y
apt install tightvnc -y
```

## usage

```sh
# 명령어 입력 후 비밀번호설정
vncserver

# 1번 디스플레이 서비스 중지
vncserver -kill :1

# ~/.vnc/xstartup 파일에 아래 내용 추가
gnome-panel &
gnome-settings-daemon &
metacity &
nautilus &

# 1번 디스플레이에 서비스 가동
vncserver :1

# vnc 클라이언트 사용하여 접속
1번 디스플레이 포트번호 :5901, 2번 디스플레이 포트번호 :5902 ...
```
