# VNC

1. VNC 서버 install

```sh
sudo apt install gnome-panel gnome-settings-daemon metacity tightvnc
```

2. vncserver 명령어 입력 후 비밀번호설정

3. 1번 디스플레이 서비스 중지

```sh
vncserver -kill :1
```

4. `~/.vnc/xstartup` 파일 행 추가

```sh
gnome-panel &
gnome-settings-daemon &
metacity &
nautilus &
```

5. `vncserver :1` 명령으로 1번 디스플레이에 서비스 가동

6. vnc 클라이언트 사용하여 접속

- 1번 디스플레이 포트번호 :5901, 2번 디스플레이 포트번호 :5902 ...
